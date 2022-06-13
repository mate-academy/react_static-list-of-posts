import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PostListProps } from '../../types/PostListProps';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostList: React.FC<PostListProps> = ({ posts = [] }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id} className="post-list__item">
        <PostInfo post={post} />
        {post.user && <UserInfo user={post.user} />}
        <CommentList comments={post.comments} />
      </li>
    ))}
  </ul>
);
