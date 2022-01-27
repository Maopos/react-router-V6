import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== "") {
    return <h1>{error}</h1>;
  }

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="container">
      <h1>Blog</h1>
      <br />
      <h3>Buscar</h3>
      <input
        type="text"
        className="form-control w-50"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      <br />
      <br />
      {data
        .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`} id="link">
              {item.id} - {item.title}
            </Link>
          </h4>
        ))}
    </div>
  );
};

export default Blog;
