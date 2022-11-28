import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comments[];
}

export const CommentList: React.FC<Props> = (props) => {
  return (
    <>
      {props.comments.map((comment) => (
        <div className="CommentList" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </>
  );
};
