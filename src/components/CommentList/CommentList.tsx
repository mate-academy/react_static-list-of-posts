import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  commentsList: Comment[];
};

export const CommentList: React.FC<Props> = ({ commentsList }) => (
  <ul className="CommentList">
    {commentsList.map(comment => (
      <li
        className="CommentInfo"
        key={comment.id}
      >
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </li>
    ))}
  </ul>
);
