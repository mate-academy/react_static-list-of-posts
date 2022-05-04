import React from 'react';
import { Comment } from '../../Types/types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type CommentListType = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListType> = ({ comments }) => (
  <ul className="CommentList" data-cy="comments-list">
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
