import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [votes, setVotes] = useState(0);
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

  const updateVotes = (article_id, count) => {
    if (count === 1) {
      setVotes(votes + 1);
    } else {
      setVotes(votes - 1);
    }
  };

  return (
    <div>
      <h1 className>Articles</h1>

      <ul className="mt-20 flex flex-col-3 justify-center font-bold underline text-blue-700 text-xl">
        <li className="px-2 hover:scale-110 hover:text-blue-900 duration-300">
          <Link to="/articles/coding">CODING</Link>
        </li>
        <li className="px-2 hover:scale-110 hover:text-blue-900 duration-300">
          <Link to="/articles/cooking">COOKING</Link>
        </li>
        <li className="px-2 hover:scale-110 hover:text-blue-900 duration-300">
          <Link to="/articles/football">FOOTBALL</Link>
        </li>
      </ul>
      {articles.map((item) => {
        return (
          <div className="article p-4" key={item.article_id}>
            <div className="article-header">
              <div className="article-title">
                <h2 className="font-bold underline text-blue-400 text-xl hover:scale-110 hover:text-gray-500 duration-300">
                  <Link
                    to={`/articles/${item.article_id}/article_and_comments`}
                  >
                    {item.title}
                  </Link>
                </h2>
                <h3 className="text-blue-500 hover:scale-110 hover:text-blue-700 duration-300">
                  <Link to={`/articles/${item.topic}`}>#{item.topic}</Link>
                </h3>
              </div>

              <div className="article-info">
                <p>@{item.author}</p>
                <p> {item.created_at}</p>
              </div>
            </div>

            <div className="article-body">
              <p>{item.body}</p>{' '}
            </div>

            <div className="article-footer">
              <Link to={`/articles/${item.article_id}/article_and_comments`}>
                Comments: {item.comment_count}
              </Link>
              <div className="article-button">
                <p id="votes">Article Votes: {item.votes}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
