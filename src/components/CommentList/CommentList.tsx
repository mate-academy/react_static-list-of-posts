import React from 'react';

import './CommentList.scss';

// Types
import { Comment } from '../../Types/comment';

// Components
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((comment: Comment) => (
      <CommentInfo
        commentName={comment.name}
        email={comment.email}
        commentBody={comment.body}
        key={comment.id}
      />
    ))}
  </ul>
);
