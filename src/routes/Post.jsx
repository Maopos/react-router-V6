import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Post = () => {
  let params = useParams();

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== "") {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container col-md-7">
      <br />
      <br />
      <br />
      <br />

      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
      <Link to="/blog">Volver a Blog</Link>
    </div>
  );
};

export default Post;
