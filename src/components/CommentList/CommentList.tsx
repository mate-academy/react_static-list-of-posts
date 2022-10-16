import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const commentsList = comments.map(comment => (
    <li key={comment.id}>
      <CommentInfo
        comment={comment}
      />
    </li>
  ));

  return (
    <ul className="CommentList">
      {commentsList}
    </ul>
  );
};
