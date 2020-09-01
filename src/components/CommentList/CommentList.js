import React from 'react';
import './CommentList.scss';

import PropTypes from 'prop-types';

export const CommentList = ({ comments }) => (
  <section className="comments">
    <h3 className="comments__title">
      Comments:
    </h3>

    {comments.map(comment => (
      <article className="comments__comment comment" key={comment.id}>
        <p className="comment__name">
          {comment.name}
        </p>

        <p className="comment__body">
          {comment.body}
        </p>

        <p className="comment__email">
          {comment.email}
        </p>
      </article>
    ))}
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
