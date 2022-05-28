import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Create = () => {
  const { article_id } = useParams();
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [comments, setComments] = useState([]);

  // /api/articles/:article_id

  useEffect(() => {
    fetch(
      `https://nc-backend-app.herokuapp.com/api/articles/${article_id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((fetchedComments) => {
        setComments(fetchedComments.comments);
        console.log(fetchedComments.comments);
      });
  }, [article_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { username, body };
    comments.push(comment);
    setIsPending(true);
    fetch(
      `https://nc-backend-app.herokuapp.com/api/articles/${article_id}/comments`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment),
      }
    ).then((dataReturned) => {
      setIsPending(false);
    });
  };

  const increaseCommentVote = (comment_id) => {
    comments.comment_id++;
  };

  const deleteComment = (comment_id) => {
    let newComments = [...comments];
    for (let i = 0; i < newComments.length; i++) {
      if (newComments[i].comment_id === comment_id) {
        newComments.splice(i, 1);
      }
    }
    setComments(newComments);
    fetch(`https://nc-backend-app.herokuapp.com/api/comments/${comment_id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Delete successful');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="create">
      <h2>Add a new comment</h2>
      <form
        className="border-2 rounded-md border-gray-300 mb-4 p-4"
        onSubmit={handleSubmit}
      >
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        {!isPending && (
          <button className="rounded-md mb-4  bg-red-500 px-4 hover:scale-110 hover:text-white hover:bg-red-400 duration-300">
            Add Comment
          </button>
        )}
        {isPending && <button disabled>Adding Comment...</button>}
      </form>

      {comments.map((comment) => {
        return (
          <div className="comment p-4" key={comment.comment_id}>
            {' '}
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
              <button
                className="rounded-md bg-red-600 px-4 hover:scale-110 hover:text-white hover:bg-red-400 duration-300"
                onClick={() => deleteComment(comment.comment_id)}
              >
                Delete Comment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Create;
