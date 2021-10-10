import React from 'react';
import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  data: Comment[];
};
export const CommentList: React.FC<Props> = ({ data: comments }) => (
  <>
    <p>Comment section</p>
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <CommentInfo key={comment.id} data={comment} />
        );
      })}
    </ul>
  </>
);
