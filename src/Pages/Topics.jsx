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
      {console.log(params.topics)}
      {articles
        .filter((article) => article.topic === params.topics)
        .map((item) => {
          {
            console.log(item, "new new");
          }
          return (
            <div>
              <header>
                <h2>{item.title}</h2>
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

export default Topics;
