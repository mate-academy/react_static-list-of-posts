import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <article className="post__comment" key={comment.id}>
        <Comment {...comment} />
      </article>
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
