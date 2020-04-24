import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentList.css';

const CommentList = ({ comments }) => (
  <ul className="comment__list">
    {comments.map(item => (
      <li className="comment__item" key={item.id}>
        <Comment {...item} />
      </li>
    ))}
  </ul>

);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
