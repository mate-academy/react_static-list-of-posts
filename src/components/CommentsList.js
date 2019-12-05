import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import './CommentsList.css';

const CommentsList = (props) => {
  const postComment = props.comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <div className="post__comment-list">
      <h4 className="post__comment-list-header">Comments</h4>
      {postComment}
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentsList;
