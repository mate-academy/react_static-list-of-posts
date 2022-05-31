import React from 'react';
import { Comment } from '../../react-app-env';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  commetsArray: Comment[]
}

export const CommentList: React.FC<Props> = ({ commetsArray }) => (
  <>
    {commetsArray.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </>
);
