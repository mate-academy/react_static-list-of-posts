import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';
import { CommentListShape } from '../../shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li className="comments__item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = CommentListShape;
