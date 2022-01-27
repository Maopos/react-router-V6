import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <h1>Página no encontrada...</h1>
      <h2>Error 404.</h2>
      <Link to="/">Inicio</Link>
    </div>
  );
};

export default ErrorPage;
