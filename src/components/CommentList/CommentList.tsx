import React from 'react';
import { Comment } from '../../types/comments';
import { CommentInfo } from '../CommentInfo';

interface CommentProps {
  commentsFromServer: Comment[];
}

export const CommentList: React.FC<CommentProps> = ({ commentsFromServer }) => (
  <>
    {!!commentsFromServer.length && (
      <div className="CommentList">
        {commentsFromServer.map((comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    )}
  </>
);
