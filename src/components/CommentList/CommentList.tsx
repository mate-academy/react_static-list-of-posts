import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <section className="CommentList">
    <h3 className="CommentList__title">
      Comment:
    </h3>
    {comments.map((comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </section>
);
