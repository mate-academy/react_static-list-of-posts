import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import { TypeComment } from '../../types';

const CommentList = ({ comments }) => (
  <div className="commentList">
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(TypeComment).isRequired,
};

export default CommentList;
