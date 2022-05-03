import React from 'react';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListType = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListType> = ({ comments }) => (
  <ul className="commentList" data-cy="comments-list">
    {
      comments.map(comment => (
        <CommentInfo
          key={comment.id}
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
