import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import { Comment } from '../types/Comment';

type Props = {
  commentsProps: Comment[]
};

export const CommentList:React.FC<Props> = (props) => {
  const { commentsProps } = props;

  return (
    <>
      {commentsProps.map(comment => {
        const { id } = comment;

        return (
          <CommentInfo key={id} userComment={comment} />
        );
      })}
    </>
  );
};
