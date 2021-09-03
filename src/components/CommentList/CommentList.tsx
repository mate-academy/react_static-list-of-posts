import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface Prop {
  comments: Comment[];
}

export const CommentList: React.FC<Prop> = ({ comments }) => (
  <div className="comments">
    {comments.map(section => (
      <section className="comment" key={section.id}>
        <CommentInfo comment={section} />
      </section>
    ))}
  </div>
);
