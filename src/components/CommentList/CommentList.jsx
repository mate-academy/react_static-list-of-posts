import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <section className="CommentList">
    <h3 className="CommentList__title">
      { comments.length && 'Comments'}
    </h3>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

CommentList.defaultProps = {
  comments: [],
};
