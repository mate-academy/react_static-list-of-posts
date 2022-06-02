import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="content is-normal">
    <ul>
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </ul>
  </div>
);
