import React from 'react';

import './CommentList.scss';

import { Comments } from '../../types/Comments';

import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comments[];
}
export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
