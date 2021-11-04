import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import CommentInfo from '../CommentInfo';

type Props = {
  comments:Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="comments--list">
      {comments.map((comment:Comment) => (<CommentInfo key={comment.id} {...comment} />))}
    </ul>
  );
};
