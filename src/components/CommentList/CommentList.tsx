import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../typedefs/Comment';

interface Props {
  postComments: Omit<Comment, 'postId'>[]
}

export const CommentList: React.FC<Props> = ({ postComments }) => (
  <ul className="comment-list">
    {postComments.map(comment => (
      <CommentInfo singleComment={comment} key={comment.id} />
    ))}
  </ul>
);
