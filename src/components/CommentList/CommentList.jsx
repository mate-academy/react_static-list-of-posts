import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';
import PropTypes from 'prop-types';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
       <li key={comment.id} className="comment">
         <Comment {...comment} />
       </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
