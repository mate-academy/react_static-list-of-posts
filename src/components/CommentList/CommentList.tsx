import React, { Fragment } from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <Fragment key={comment.id}>
          <CommentInfo comment={comment} />
        </Fragment>
      ))}
    </>
  );
};
