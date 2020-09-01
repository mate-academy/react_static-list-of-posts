import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ preparedComments }) => (
  <section className="CommentList">
    {preparedComments.map(comment => (
      <Comment id={comment.id} {...comment} />
    ))}
  </section>
);

CommentList.propTypes = {
  preparedComments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
