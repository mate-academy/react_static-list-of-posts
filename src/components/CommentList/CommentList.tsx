import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }: Props) => {
  return (
    <>
      <div className="CommentList">
        {comments.map(comment => {
          return (<CommentInfo key={comment.id} comment={comment} />);
        })}
      </div>
    </>
  );
};
