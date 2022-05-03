import React from 'react';
import { Post } from '../type/post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo:React.FC<Props> = ({ post }) => (
  <div className="post">
    <h3 data-cy="post-title" className="post__title">
      {post.title}
    </h3>
    <p data-cy="post-body" className="post__body">
      {post.body}
    </p>
    {post.user && <UserInfo user={post.user} />}
    <h3>Comments:</h3>
    {post.comment && <CommentList comment={post.comment} />}
  </div>
);
