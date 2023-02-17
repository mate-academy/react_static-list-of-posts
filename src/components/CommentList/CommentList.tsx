import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((el: Comment) => <CommentInfo comment={el} key={el.id} />)}
  </div>
);
