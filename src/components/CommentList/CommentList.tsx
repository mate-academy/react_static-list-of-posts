import React from 'react';
import { Comment } from '../../type/type';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  commentList: Comment[];
}

export const CommentList: React.FC<Props> = ({ commentList }) => (
  <ul className="comment-list">
    {
      commentList.map(
        (comment) => <CommentInfo key={comment.id} commentInfo={comment} />,
      )
    }
  </ul>
);
