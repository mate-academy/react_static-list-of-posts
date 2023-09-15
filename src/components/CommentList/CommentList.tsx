/* eslint-disable max-len */
import React from 'react';
import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList = ({ comments }: Props) => (
  <div className="commentList">
    {comments.map(comment => <CommentInfo comment={comment} key={comment.id} />)}
  </div>
);
