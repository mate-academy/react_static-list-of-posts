import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <div className="comment">
        <div className="comment__email">{ comment.email }</div>
        <h2 className="comment__name">{ comment.name }</h2>
        <p className="comment__text">{ comment.body }</p>
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
