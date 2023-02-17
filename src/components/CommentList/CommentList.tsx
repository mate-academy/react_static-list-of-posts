import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comment: Comment[],
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    {comment.map(
      userComment => (
        <CommentInfo key={userComment.id} userComment={userComment} />
      ),
    )}
  </div>
);
