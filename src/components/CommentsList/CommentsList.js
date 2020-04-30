import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentsList.css';

const CommentsList = ({ comments }) => (
  <div key="CommentsList" className="post__comments-list">
    <p className="post__comments-list_title">
      Comments:
    </p>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

export default CommentsList;

CommentsList.propTypes = PropTypes.arrayOf({}).isRequired;
