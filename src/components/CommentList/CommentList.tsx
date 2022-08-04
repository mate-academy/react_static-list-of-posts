import React from 'react';

import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length > 0) {
    return (
      <>
        <hr />
        <div className="CommentList">
          {comments.map(comment => (
            <CommentInfo comment={comment} key={comment.id} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <hr />

      <b>No comments yet</b>
    </>
  );
};
