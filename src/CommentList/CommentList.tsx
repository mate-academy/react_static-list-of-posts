import React from 'react';

import { Comment } from '../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './Comments.scss'

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment_list">
    {comments.map(comment => (
      <li key={comment.id} className="comment_item">
        <CommentInfo name={comment.name} email={comment.email} body={comment.body} />
      </li>
    ))}
  </ul>
);
