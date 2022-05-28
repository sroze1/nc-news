import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
  }, []);

  return (
    <div>
      <h1>Topic: {params.topic}</h1>

      <h2>{articles.comment_count}</h2>
      {articles.map((item) => {
        return (
          <div className="article p-4" key={item.article_id}>
            <div className="article-header" id="topics-header">
              <h2 className="font-bold underline text-blue-400 text-xl hover:scale-110 hover:text-gray-500 duration-300">
                <Link to={`/articles/${item.article_id}/article_and_comments`}>
                  {item.title}
                </Link>
              </h2>
              <div className="article-info">
                <p>@{item.author}</p>
                <p> {item.created_at}</p>
              </div>
            </div>

            <div className="article-body">
              <p>{item.body}</p>
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

export default Topics;
