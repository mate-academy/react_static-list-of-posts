import React from 'react';

import { Comment } from '../types/Comment';

import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <ul className="post__comments">
    {comments.map(comment => (
      <CommentInfo
        key={comment.id}
        name={comment.name}
        body={comment.body}
        email={comment.email}
      />
    ))}
  </ul>
);
