import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Create from '../Components/Create';

const Article_and_Comments = () => {
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState(0);

  const { article_id } = useParams();

  useEffect(() => {
    fetch(`https://nc-backend-app.herokuapp.com/api/articles/${article_id}`)
      .then((response) => {
        return response.json();
      })
      .then((newArticle) => {
        setArticle(newArticle.results);
        setVotes(newArticle.results.votes);
      });
  }, [article_id]);

  const increaseVote = () => {
    setVotes(votes + 1);
  };

  console.log(article);

  return (
    <div>
      <h1>Article {article_id} </h1>

      <div className="article">
        <div className="article-header">
          <h1 className="font-semibold text-lg">Article {article_id} </h1>
          <div className="article-title">
            <h2 className="font-bold text-xl">{article.title}</h2>
            <h3 className="text-blue-500 hover:scale-110 hover:text-blue-700 duration-300">
              <Link to={`/articles/${article.topic}`}>#{article.topic}</Link>
            </h3>
          </div>

          <div className="article-info">
            <p>@{article.author}</p>
            <p> {article.created_at}</p>
          </div>
        </div>

        <div className="article-body">
          <p>{article.body}</p>
        </div>

        <div className="article-footer pb-4">
          <div className="article-button">
            <p className="" id="votes">
              Article Votes: {article.votes}
            </p>
            <button
              className="rounded-md bg-red-600 px-4 hover:scale-110 hover:text-white hover:bg-red-400 duration-300"
              onClick={increaseVote}
            >
              Click to upvote
            </button>
          </div>
        </div>
      </div>

      <Create />
    </div>
  );
};

export default Article_and_Comments;
