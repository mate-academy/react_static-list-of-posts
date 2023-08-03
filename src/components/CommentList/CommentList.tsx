import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <div className="CommentList">
        <CommentInfo comment={comment} key={comment.id} />
      </div>
    ))}
  </div>
);
