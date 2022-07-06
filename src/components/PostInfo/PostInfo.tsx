import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../Types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => (
  <div className="postInfo" data-cy="post-info">
    <h2 className="postInfo__title" data-cy="post-title">{post.title}</h2>
    <p className="postInfo__info" data-cy="post-info">{post.body}</p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList list={post.comments} />
  </div>
);
