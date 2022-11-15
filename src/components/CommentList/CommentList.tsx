import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comment: Comment[]
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    {
      comment.map((oneComment) => (
        <ul key={oneComment.id}>
          <CommentInfo info={oneComment} />
        </ul>
      ))
    }
  </div>
);
