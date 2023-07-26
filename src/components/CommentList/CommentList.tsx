import React from 'react';
import { Post } from '../../types/post';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type TypePostInfo = {
  post: Post;
};

export const CommentList: React.FC<TypePostInfo> = ({ post }) => (
  <div className="CommentList">
    {post.comment.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
