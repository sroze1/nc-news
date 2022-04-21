import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  let navigate = useNavigate;
  useEffect(() => {
    fetch(`https://nc-backend-app.herokuapp.com/api/articles`)
      .then((response) => {
        return response.json();
      })
      .then((newArticles) => {
        setArticles(newArticles);
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((item) => {
        return (
          <div className="article" key={item.article_id}>
            <header>
              <h2>{item.title}</h2>
              <p>#{item.topic}</p>
            </header>

            <div className="body">
              <p>{item.body}</p>
              <div>
                {" "}
                <p>@{item.author}</p>
                <Link to={`/api/articles/${item.article_id}/comments`}>
                  Comments: {item.comment_count}
                </Link>
                <button id="votes">{item.votes}</button>
                <label htmlFor="votes">Click to upvote</label>
                <p> {item.created_at}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;