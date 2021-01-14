import React from 'react';
import PropTypes from 'prop-types';
import { PostListType } from '../../types';
import { Comment } from '../Comment';

import './Comments.scss';

export const CommentList = ({ comments }) => (
  <ul className="post__comments comments">
    {
      comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))
    }
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(PostListType.comments).isRequired)
    .isRequired,
};
