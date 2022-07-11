import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comments } from '../types/Comments';

type Prop = {
  comments: Comments[],
};

export const CommentList: React.FC<Prop> = ({ comments }) => (
  <ul className="post__comments">
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo
          email={comment.email}
          body={comment.body}
          name={comment.name}
        />
      </li>
    ))}
  </ul>
);
