import React from 'react';

import { Comment } from '../../types/Comment';

import { CommentsInfo } from '../CommentInfo';

import './CommentList.scss';

type Props2 = {
  commentsArr: Comment[] | null,
};

export const CommentsList: React.FC<Props2> = ({ commentsArr }) => (
  <div className="CommentList">
    {commentsArr !== null
    && commentsArr.map(oneComment => (
      <div key={oneComment.id}>
        <CommentsInfo {...oneComment} />
      </div>
    ))}
  </div>
);
