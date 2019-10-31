import React from 'react';
import './comments.css';

const Comments = ({ commentsArr }) => (
  <>
  <span className="post__comments-button">comments</span>
  <div className="post__comments-container">
    {commentsArr.map(comment => (
      <>
        <p className="post__comment">{comment.body}</p>
        <span className="post__comment_author">
          {`By ${comment.email.split('@').shift().replace(/[^A-Za-z]/g, ' ')}`}
        </span>
      </>
    ))}
  </div>
  </>
)

export default Comments;
