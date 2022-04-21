import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Topics = () => {
  const [articles, setArticles] = useState([]);
  let navigate = useNavigate;
  let params = useParams();
  useEffect(() => {
    fetch(`https://nc-backend-app.herokuapp.com/api/articles`)
      .then((response) => {
        return response.json();
      })
      .then((newArticles) => {
        setArticles(newArticles);
      });
  }, [params.topics]);

  return (
    <div>
      <h1>Topics: {params.topics}</h1>
    </div>
  );
};

export default Topics;
