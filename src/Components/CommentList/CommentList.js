import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <div className="comments__list">
    <h2 className="comments__p">Comments:</h2>
    <ul>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
