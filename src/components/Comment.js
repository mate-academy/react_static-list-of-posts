import React from 'react';
import './CommentList/CommentList.css';
import { CommentShape } from './Shapes';

export default function Comment({ comment }) {
  return (
    <tr className="comment__row">
      <td>{comment.name}</td>
      <td>{comment.email}</td>
      <td>{comment.body}</td>
    </tr>

  );
}

Comment.propTypes = CommentShape;
