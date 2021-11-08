import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | null;
};

export const CommentList:React.FC <Props> = ({ comments }) => (
  <ul className="CommentList">
    { comments
      ? comments.map(comment => (<CommentInfo comment={comment} key={comment.id} />))
      : null }
  </ul>
);
