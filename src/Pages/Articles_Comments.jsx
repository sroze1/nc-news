import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Articles = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://nc-backend-app.herokuapp.com/api/articles/${params.article_id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((newArticle) => {
        setArticle(newArticle.results);
      });
  }, [params.article_id]);

  // Display the article with the comments
  useEffect(() => {
    fetch(
      `https://nc-backend-app.herokuapp.com/api/articles/${params.article_id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((newComments) => {
        setComments(newComments.comments);
      });
  }, [params.article_id]);

  return (
    <div>
      <h1>Article {params.article_id} </h1>
      <div className="body">
        <div className="article">
          <p>{article.title}</p>
          <p>{article.topic}</p>
          <p>{article.body}</p>
          <p>@{article.author}</p>
          <p>{article.created_at}</p>
          <p>{article.votes}</p>
          <p>END OF ARTICLE REFERENCE FOR ME ONLY TO SPLIT THIS SHIT UP </p>
        </div>
      </div>

      <div className="comments">
        {comments.map((comment) => {
          return (
            <div>
              {" "}
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>{comment.created_at}</p>
              <button id="votes">{comment.votes}</button>
              <label htmlFor="votes">Upvote dude?</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
