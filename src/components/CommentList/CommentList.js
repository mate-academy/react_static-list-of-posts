import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.scss';

const CommentList = ({ comments }) => (
  <ul className="comment-list">
    <h4>Comments:</h4>
    {comments.map(comment => (
      <li className="comment-list__item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
