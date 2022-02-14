/* eslint-disable no-console */
import React from 'react';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | undefined | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments ? (
    <ul className="post__coment-list">
      {comments.map(el => (
        <li className="post__coment-content" key={el.id}>
          <CommentInfo comment={el} />
        </li>
      ))}
    </ul>
  )
    : (
      <div>No Comments yet...</div>
    );
};
