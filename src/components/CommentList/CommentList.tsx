import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../Types/Types';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div key={comment.id} data-cy="comments-list">
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </div>
    ))}
  </>
);
