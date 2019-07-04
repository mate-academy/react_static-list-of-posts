
import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => (
  <div className="CommentList__items">
    {comments.map(comment => (
      <div>
        <div className="title-group">
          <span className="CommentList__user">{comment.email}:</span>
          <span className="title"> {comment.name}</span>
        </div>
        <span>{comment.body} </span>
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comment: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.string,
  }).isRequired
};

export default CommentList;
