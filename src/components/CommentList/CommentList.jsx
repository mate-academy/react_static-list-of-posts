import React from 'react';
import { Comment } from '../Comment';
import { CommentListType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul className="post-item__comments comments-list">
    {comments.map(comment => (
      <li className="comments-list__item comments-item" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = CommentListType;
