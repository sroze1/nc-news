import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Article_and_Comments = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    Promise.all([
      fetch(
        `https://nc-backend-app.herokuapp.com/api/articles/${params.article_id}`
      )
        .then((response) => {
          return response.json();
        })
        .then((newArticle, newComments) => {
          setArticle(newArticle.results);
        }),
      fetch(
        `https://nc-backend-app.herokuapp.com/api/articles/${params.article_id}/comments`
      )
        .then((response) => {
          return response.json();
        })
        .then((newComments) => {
          setComments(newComments.comments);
        }),
    ]);
  }, [params.article_id]);

  return (
    <div>
      <h1>Article {params.article_id} </h1>

      <div className="article">
        <div className="article-header">
          <div className="article-title">
            <h2>{article.title}</h2>
            <h3>
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

        <div className="article-footer">
          <div className="article-button">
            <p id="votes">Article Votes: {article.votes}</p>
            <button>Click to upvote</button>
          </div>
        </div>
      </div>

      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.comment_id}>
            {" "}
            <div className="comment-info">
              <p>@{comment.author} commented:</p>
              <p>{comment.created_at}</p>
            </div>
            <div className="comment-body">
              <p>{comment.body}</p>
            </div>
            <div className="comment-footer">
              <div className="comment-button">
                <p id="votes">Comment Votes: {comment.votes}</p>
              </div>
              <button>Click to upvote</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Article_and_Comments;
