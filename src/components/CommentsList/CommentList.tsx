import React from 'react';
import { Comment } from '../../types/Comment';
import CommentInfo from '../CommentsInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
        <CommentInfo
          email={comment.email}
          name={comment.name}
          body={comment.body}
        />
      </li>
    ))}
  </ul>
);
