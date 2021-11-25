import React from 'react';

import { ComentItem } from '../CommentItem';

import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <section className="CommentList">
      <h3 className="CommentList__title">Comments:</h3>
      {comments.map((comment) => (
        <ComentItem key={comment.id} comment={comment} />
      ))}
    </section>
  );
};
