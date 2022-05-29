import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}
export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <ul key={comment.id}>
        <CommentInfo comment={comment} />
      </ul>
    ))}
  </>
);
