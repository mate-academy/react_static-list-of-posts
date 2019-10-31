import React from 'react';
import PropTypes from 'prop-types';
import './comments.css';

const Comments = ({ commentsList }) => (
  <>
    <span className="post__comments-button">comments</span>
    <div className="post__comments-container">
      {commentsList.map(comment => (
        <>
          <p className="post__comment">{comment.body}</p>
          <span className="post__comment_author">
            {`By ${comment.email.split('@')
              .shift()
              .replace(/[^A-Za-z]/g, ' ')}`}
          </span>
        </>
      ))}
    </div>
  </>
);

Comments.propTypes = {
  commentsList: PropTypes.func.isRequired,
};

export default Comments;
