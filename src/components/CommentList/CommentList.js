import React from 'react';
import { Comment } from '../Comment';
import { CommentListShape } from '../shapes/CommentListShape';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comments-list">
    {
      comments.map(comment => (
        <li className="comments-list__item">
          <Comment {...comment} key={comment.id} />
        </li>
      ))
    }
  </ul>
);

CommentList.propTypes = CommentListShape;
