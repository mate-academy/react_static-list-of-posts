import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((comment) => (
      <li>
        <CommentInfo comment={comment} key={comment.postId} />
      </li>
    ))}
  </ul>
);
