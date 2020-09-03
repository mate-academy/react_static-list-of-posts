import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

import './CommentList.scss';

export const CommentList = ({ commentInPost }) => (
  commentInPost.map(comment => (
    <Comment {...comment} key={comment.id} />
  ))
);

CommentList.propTypes = {
  commentInPost: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
