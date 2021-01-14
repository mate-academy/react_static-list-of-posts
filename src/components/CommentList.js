import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { CommentTypes } from '../types';

export const CommentList = ({ comments }) => (
  <div className="posts__item-comments">
    <p className="posts__item-comments-amount">
      {`Comments: ${comments.length}`}
    </p>
    <div className="posts__item-comments-list">
      {comments.map(comment => (
        <div className="posts__item-comments-item" key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
};
