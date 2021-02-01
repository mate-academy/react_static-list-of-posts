import React from 'react';
import PropTypes from 'prop-types';
import { TypeComment } from '../types';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>

        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = PropTypes.arrayOf(TypeComment).isRequired;
