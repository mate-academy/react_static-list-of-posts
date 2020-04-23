import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <section>
    <h3>Comments: </h3>
    <ul className="comment__list">
      {comments.map(comment => (
        <li key={comment.id} className="comment__item">
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
