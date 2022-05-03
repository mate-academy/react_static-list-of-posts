import React from 'react';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li className="comments-item" key={comment.id}>
        <CommentInfo
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);
