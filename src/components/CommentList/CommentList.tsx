import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};
// eslint-disable-next-line
export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(coment => (
        <CommentInfo {...coment} key={coment.id} />
      ))}
    </div>
  );
};
