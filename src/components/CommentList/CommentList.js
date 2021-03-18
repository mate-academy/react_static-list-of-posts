import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ol className="commentlist">
    <p className="commentlist__title">Comments</p>
    {
      comments.map(comment => (
        <li className="commentlist__item" key={comment.id}>
          <Comment
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))
    }
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape.isRequired,
    }).isRequired,
  ).isRequired,
};
