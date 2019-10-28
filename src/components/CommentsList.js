import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import comments from '../api/comments';

export default function CommentsList({ post }) {
  const postComments = comments.filter(comment => comment.postId === post.id);

  return (
    <ul>
      { postComments
        .map(comment => <Comment comment={comment} key={comment.id} />) }
    </ul>
  );
}

CommentsList.propTypes = {
  post: PropTypes.string.isRequired,
};
