import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.scss';
import { typeComments } from '../../types';

const CommentList = ({ comments }) => (
  <ul className="commentList">
    <h3>
      Comments
    </h3>

    <li className="commentList__comment">
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </li>
  </ul>
);

CommentList.propTypes = typeComments.isRequired;

export default CommentList;
