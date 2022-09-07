import React from 'react';
import { Comment } from '../../types/comments';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  commentsList : Comment[],
};

export const CommentList: React.FC<Props> = ({ commentsList }) => (
  <div className="CommentList">
    {commentsList
      .map(comment => <CommentInfo commentOne={comment} key={comment.id} />)}
  </div>
);
