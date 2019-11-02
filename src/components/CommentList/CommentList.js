import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

const CommentList = ({ comment }) => (
  <ul className="comments-info">
    {comment.map(item => (
      <Comment item={item} key={item.id} />
    ))}

  </ul>

);

export default CommentList;

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.string),
};
