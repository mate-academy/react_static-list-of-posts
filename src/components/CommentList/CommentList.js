import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.css';

import Comment from '../Comment/Comment';

const CommentList = ({ commentList }) => (
  <ul className="post__comment-list">
    {commentList.map(comment => (
      <li className="post__comment-item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
