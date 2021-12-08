import React from 'react';

import { CommentInfo } from './CommentInfo';
import { Comment } from '../types';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <section className="commentList">
      <div className="commentList__info">
        <img
          className="commentList__icon"
          src="./images/comment.svg"
          alt="Comments"
        />
      </div>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </section>
  );
};
