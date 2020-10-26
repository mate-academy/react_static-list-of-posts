import React from 'react';
import PropTypes from 'prop-types';
import { CommentPropTypes } from '../PropTypes/CommentPropTypes';

import './CommentList.scss';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div>
    <h2 className="commentlist__title">Comments</h2>
    <ul className="commentlist list-group">
      {
        comments.map(comment => (
          <li
            className="
              list-group-item
              list-group-item-action
              list-group-item-light
          "
            key={comment.id}
          >
            <Comment {...comment} />
          </li>
        ))
      }
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentPropTypes),
  ).isRequired,
};
