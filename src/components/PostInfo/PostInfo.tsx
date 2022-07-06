import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../Types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => (
  <div className="postInfo" data-cy="post-info">
    <p className="postInfo__item" data-cy="post-title">{post.title}</p>
    <p className="postInfo__item" data-cy="post-info">{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    <CommentList list={post.comments} />
  </div>
);
