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
            <div className="article-header">
              <div className="article-title">
                <h2>
                  <Link
                    to={`/articles/${item.article_id}/article_and_comments`}
                  >
                    {item.title}
                  </Link>
                </h2>
                <h3>
                  <Link to={`/articles/${item.topic}`}>#{item.topic}</Link>
                </h3>
              </div>

              <div className="article-info">
                <p>@{item.author}</p>
                <p> {item.created_at}</p>
              </div>
            </div>

            <div className="article-body">
              <p>{item.body}</p>{" "}
            </div>

            <div className="article-footer">
              <Link to={`/articles/${item.article_id}/article_and_comments`}>
                Comments: {item.comment_count}
              </Link>
              <div className="article-button">
                <p id="votes">Article Votes: {item.votes}</p>
                <button>Click to upvote</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
