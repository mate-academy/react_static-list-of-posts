import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment';
import { CommentPropTypes } from './propTypes/CommentPropTypes';
import './CommentsList.scss';

export const CommentList = ({ comments }) => (
  <ul className="CommentsList">
    {comments.map(comment => (
      <li className="Comment" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = PropTypes.arrayOf(
  PropTypes.shape(CommentPropTypes).isRequired,
).isRequired;
