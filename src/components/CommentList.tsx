import React from 'react';
import CommentInfo from './CommentInfo';
import { CommentType } from '../types';

import './CommentList.scss';

type Props = {
  comments: CommentType[]
};

const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="App__comment-list comment-list">
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);

export default CommentList;
