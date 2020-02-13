import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.css';
import { Comment } from '../Comment/Comment';

export const CommentList = (props) => {
  const { comments } = props;

  return (
    <ul className="commentList">
      {comments.map(item => <Comment key={item.id} comment={item} />)}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf().isRequired,
};
