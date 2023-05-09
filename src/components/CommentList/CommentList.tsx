import React from 'react';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => {
        const {
          id,
          name,
          email,
          body,
        } = comment;

        return (
          <CommentInfo
            key={id}
            name={name}
            email={email}
            body={body}
          />
        );
      })}
    </div>
  );
};
