import React from 'react';
import { CommentType } from '../types';

import './CommentInfo.scss';

type Props = CommentType;

const CommentInfo: React.FC<Props> = ({ ...comment }) => (
  <div className="App__comment comment">
    <div className="comment__email">{comment.email}</div>
    <h3 className="comment__name">{comment.name}</h3>
    <p className="comment__body">{comment.body}</p>
  </div>
);

export default CommentInfo;
