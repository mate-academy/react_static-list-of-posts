/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';

const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <ul className="comments">
        <div className="comments-name">
          {comment.name}
        </div>
        <div className="comments-body">
          {comment.body}
        </div>
        <div className="comments-email">
          {comment.email}
        </div>
      </ul>
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentList;
