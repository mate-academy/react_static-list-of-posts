import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(({
      id,
      name,
      email,
      body,
    }) => (
      <div className="CommentInfo" key={id}>
        <CommentInfo
          name={name}
          email={email}
          body={body}
        />
      </div>
    ))}
  </div>
);
