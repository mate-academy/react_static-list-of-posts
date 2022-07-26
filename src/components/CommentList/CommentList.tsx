import React from 'react';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments
      ? (
        <div className="CommentList">
          {comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          ))}
        </div>
      )
      : (
        <>
          <hr />

          <b>No comments yet</b>
        </>
      )}
  </>
);
