import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[] | undefined;
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {
      comments === undefined
        ? ''
        : comments.map((comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))
    }

  </div>
);
