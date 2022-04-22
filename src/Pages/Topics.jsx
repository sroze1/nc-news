import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Topics = () => {
  const [articles, setArticles] = useState([]);
  let navigate = useNavigate;
  let params = useParams();
  useEffect(() => {
    if (params.topic) {
      fetch(
        `https://nc-backend-app.herokuapp.com/api/articles?topic=${params.topic}`
      )
        .then((response) => {
          return response.json();
        })
        .then((newArticles) => {
          setArticles(newArticles);
        });
      // } else {
      //   fetch(`https://nc-backend-app.herokuapp.com/api/articles/${params.topic}`)
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((newArticles) => {
      //       setArticles(
      //         newArticles.filter((article) => article.topic === params.topics)
      //       );
      //     });
    }
  }, [params.topics]);

  return (
    <div>
      <h1>Topic: {params.topic}</h1>
      {console.log(articles)}
      <h2>{articles.comment_count}</h2>
      {articles.map((item) => {
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
                <Link to={`/articles/${item.article_id}/comments`}>
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
