import React, { Fragment } from 'react';
import { type Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.css';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <Fragment key={comment.id}>
        <CommentInfo comment={comment} />
      </Fragment>
    ))}
  </div>
);
