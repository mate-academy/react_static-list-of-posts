import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="post__comments">
    {comments.map(comment => (
      <Comment
        name={comment.name}
        body={comment.body}
        email={comment.email}
        key={comment.id}
      />
    ))}
  </div>
);

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
