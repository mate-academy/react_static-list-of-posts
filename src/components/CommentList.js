import React from 'react';
import { Comment } from './Comment';
import { CommentListShape } from '../shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <ul className="App__comment-list">
    <li>
      {
        comments.map(comment => (
          <Comment {...comment} key={comment.id} />
        ))
      }
    </li>
  </ul>
);

CommentList.propTypes = CommentListShape;
