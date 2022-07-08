import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  commentList: Comment [];
};

export const CommentList: React.FC<Props> = ({ commentList }) => (
  <>
    {commentList.map(comment => (
      <CommentInfo comments={comment} key={comment.id} />
    ))}
  </>
);
