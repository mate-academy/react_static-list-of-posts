import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments.map(({ id, name, email, body }) => (
        <CommentInfo key={id} name={name} email={email} body={body} />
      ))}
    </div>
  );
};
