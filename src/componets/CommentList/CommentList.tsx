import React from 'react';
import { Comments } from '../../types/types';

import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comment">
    {comments.map(comment => (
      <li className="post-comment__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
