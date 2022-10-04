import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo
        name={comment.name}
        email={comment.email}
        key={comment.id}
        body={comment.body}
      />
    ))}

  </div>
);
