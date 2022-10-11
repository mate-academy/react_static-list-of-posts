import React from 'react';

import { CommentTypes } from '../../types';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Array<CommentTypes>
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li className="CommentInfo" key={comment.id}>
        <CommentInfo
          comment={comment}
        />
      </li>
    ))}
  </ul>
);
