import React from 'react';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => (
  <>
    {props.comments.map(comment => {
      return (
        <ul key={comment.id}>
          <CommentInfo comment={comment} />
        </ul>
      );
    })}
  </>
);
