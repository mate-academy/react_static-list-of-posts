import React from 'react';
import PropTypes from 'prop-types';
import { PostPropTypes } from '../../propTypes/PostPropTypes';
import { CommentPropTypes } from '../../propTypes/CommentPropTypes';
import { Comment } from '../Comment';
import './CommentList.scss';

export function CommentList({ post, comments }) {
  return (
    <div className="comment-list">
      {comments
        .filter(comment => comment.postId === post.id)
        .map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
    </div>
  );
}

CommentList.propTypes = {
  post: PropTypes.shape(PostPropTypes).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)).isRequired,
};
