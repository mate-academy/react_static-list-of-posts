import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';
import { Comment } from '../../react-app-env';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    {comments.map(com => <CommentInfo comment={com} />)}
  </div>
);
