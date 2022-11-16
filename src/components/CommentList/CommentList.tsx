import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comment: Comment[]
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    {
      comment.map((oneComment) => (
        <ul>
          <CommentInfo key={oneComment.id} info={oneComment} />
        </ul>
      ))
    }
  </div>
);
