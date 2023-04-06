import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => {
      const { id } = comment;

      return (
        <li key={id}>
          <CommentInfo comment={comment} />
        </li>
      );
    })}
  </ul>
);
