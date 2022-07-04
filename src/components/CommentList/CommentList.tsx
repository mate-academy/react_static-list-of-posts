import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comments } from '../types/Comments';
import './CommentList.scss';

type Prop = {
  comments: Comments[];
};
export const CommentList: React.FC<Prop> = ({ comments }) => (
  <ul className="posts__comment">
    {comments.map(comment => (
      <li key={comment.id} className="posts__content">
        <CommentInfo
          email={comment.email}
          body={comment.body}
          name={comment.name}
        />
      </li>
    ))}
  </ul>
);
