import React from 'react';
import PropTypes from 'prop-types';

import './styles/Comment.css';

const CommentList = ({ commentsList }) => (
  <div className="comment">
    <h3 className="comment__title">Comments</h3>
    {commentsList.map(comment => (
      <div className="comment__item">
        <div className="comment__author">
          <span className="comment__author-name">{comment.name}</span>
          <span className="comment__author-email">{comment.email}</span>
        </div>
        <p className="comment__body">
          {comment.body}
        </p>
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  commentsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
};

export default CommentList;
