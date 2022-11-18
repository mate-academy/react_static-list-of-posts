import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
    {/* {
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    } */}
  </div>
);
