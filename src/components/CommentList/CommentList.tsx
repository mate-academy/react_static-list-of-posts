import React from 'react';
import { Comment } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <div key={comment.name}>
        <div>
          {comment.name}
        </div>
        <div>
          {comment.body}
        </div>
      </div>
    ))}
  </>
);
