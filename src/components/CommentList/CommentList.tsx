import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  commentsList: Comment[];
};

export const CommentList: React.FC<Props> = ({ commentsList }) => (
  <div className="CommentList">
    {commentsList.map(comment => (
      <div className="CommentInfo" key={comment.id}>
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </div>
    ))}
  </div>
);
