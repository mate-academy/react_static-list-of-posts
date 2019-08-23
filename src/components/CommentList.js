import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div className="comments_list">
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.objectOf(PropTypes.object).isRequired,

};

export default CommentList;
