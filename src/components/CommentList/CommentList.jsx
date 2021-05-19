import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.scss'

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
       <li key={comment.id} className="comment">
         <Comment {...comment} />
       </li>
    ))}
  </ul>
);
