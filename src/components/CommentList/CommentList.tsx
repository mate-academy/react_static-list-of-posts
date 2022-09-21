import React from 'react';

import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

type Comments = {
  commentsArr: Comment[];
};

export const CommentList: React.FC<Comments> = ({ commentsArr }) => (
  <div className="CommentList">
    {commentsArr.map(el => (
      <CommentInfo
        postId={el.postId}
        id={el.id}
        name={el.name}
        email={el.email}
        body={el.body}
        key={el.id}
      />
    ))}
  </div>
);
