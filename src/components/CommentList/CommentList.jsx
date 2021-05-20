import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comment }) => (
  <ul className="Post__comments-list">
    {comment.map(com => (
      <li className="commet" key={com.id}>
        <Comment {...com} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default CommentList;
