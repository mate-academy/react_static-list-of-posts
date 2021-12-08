import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    {comments.map(({
      name, body, email, id,
    }) => (
      <CommentInfo
        name={name}
        body={body}
        email={email}
        id={id}
      />
    ))}
  </div>
);
