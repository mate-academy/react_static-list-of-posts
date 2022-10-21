import React from 'react';

import { Comment } from '../../types/Comment';

import { CommentsInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  commentsArr: Comment[] | null,
};

export const CommentsList: React.FC<Props> = ({ commentsArr }) => (
  <div className="CommentList">
    {commentsArr && commentsArr.map(oneComment => (
      <div key={oneComment.id}>
        <CommentsInfo {...oneComment} />
      </div>
    ))}
  </div>
);
