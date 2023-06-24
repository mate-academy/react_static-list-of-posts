import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comm => (
      <CommentInfo
        name={comm.name}
        email={comm.email}
        body={comm.body}
        key={comm.id}
      />
    ))}
  </div>
);
