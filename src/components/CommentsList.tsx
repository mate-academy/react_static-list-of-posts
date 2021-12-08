import React from 'react';

import { CommentInfo } from './CommentInfo';
import { Comment } from '../types';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <section className="CommentList">
      <div className="CommentList__info">
        <img
          className="CommentList__icon"
          src="./images/comments.svg"
          alt="Comments"
        />
        <h3 className="CommentList__title">Comments:</h3>
      </div>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </section>
  );
};
