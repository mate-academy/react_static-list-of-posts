import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(commentItem => (
      <div className="CommentInfo" key={commentItem.id}>
        <CommentInfo comment={commentItem} />
      </div>
    ))}
  </div>
);
