import React from 'react';

import PropTypes from 'prop-types';
import comments from '../api/comments';
import Comment from './Comment';

const CommentList = ({ post }) => {
  const filteredComments = comments.filter(comment => (
    comment.postId === post.id));
  const allComments = filteredComments.map(comment => (
    <Comment key={comment.id} comment={comment} />));

  return (
    <div className="Comments">
      <h3>Comments:</h3>
      <p>{allComments}</p>
    </div>
  );
};

CommentList.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default CommentList;
