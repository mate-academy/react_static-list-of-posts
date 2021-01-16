import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { CommentType } from '../types';

const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div key={comment.id} className="comment">
        <Comment {...comment} />
      </div>
    ))}
  </>
);

CommentList.propTypes = PropTypes.arrayOf(CommentType).isRequired;

export default CommentList;
