import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/comments';
import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  </>
);
