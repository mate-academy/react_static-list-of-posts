import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Prop = {
  comments: Comment[];
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
