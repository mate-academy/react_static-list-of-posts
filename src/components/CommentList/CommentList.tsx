import React from 'react';

import { CommentInfo } from '../CommentInfo';

import { CommentListType } from '../../types';

import './CommentList.scss';

export const CommentList: React.FC<CommentListType> = props => (
  <div className="CommentList">
    {props.comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
