import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul>
      {comments?.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </ul>
  </>
);
