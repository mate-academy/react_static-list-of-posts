import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './Comment.scss';

export const CommentList = ({ comments }) => (
  <>
    <div className="comments">
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
      <br />
    </div>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};
