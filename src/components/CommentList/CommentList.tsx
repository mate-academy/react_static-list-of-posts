import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListType = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListType> = ({ comments }) => (
  <ul data-cy="comments-list" className="CommentList">
    {
      comments.map(comment => (
        <CommentInfo
          postId={comment.postId}
          id={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      ))
    }
  </ul>
);
