import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  comments.map(comment => (
    <div className="comments-list" key={comment.id}>
      <Comment {...comment} />
    </div>
  ))
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default CommentList;
