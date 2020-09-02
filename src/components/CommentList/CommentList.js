import React from 'react';
import './CommentList.scss';

import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <section className="comments">
    <h3 className="comments__title">
      Comments:
    </h3>

    {comments.map(comment => (
      <article className="comments__comment" key={comment.id}>
        <Comment {...comment} />
      </article>
    ))}
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
