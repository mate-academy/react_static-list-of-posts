import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    <p className="comments__title">List of comments</p>
    <div className="comment__list">
      {comments.map(comment => (
        <article className="post__comment" key={comment.id}>
          <Comment {...comment} />
        </article>
      ))}
    </div>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
