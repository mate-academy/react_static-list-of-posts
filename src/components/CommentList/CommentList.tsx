import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentListType = {
  comments: Comment[]
};

export const CommentList: React.FC<CommentListType> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(coment => <CommentInfo comment={coment} key={coment.id} />)}
  </div>
);
