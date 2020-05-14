import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ cList }) => (
  <ul className="post__comments">
    {cList.map(comment => (
      <Comment key={comment.id} com={comment} />
    ))}
  </ul>
);

CommentList.propTypes = PropTypes.arrayOf({}).isRequired;
