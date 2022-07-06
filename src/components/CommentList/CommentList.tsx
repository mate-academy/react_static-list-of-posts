import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../Types/Comment';
import './CommentList.scss';

export const CommentList: React.FC<{ list: Comment[] }> = ({ list }) => (
  <ul className="commentList">
    {list.map(com => <li key={com.id}><CommentInfo comment={com} /></li>)}
  </ul>
);
