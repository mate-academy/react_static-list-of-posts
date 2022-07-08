import React from 'react';
import { PreparedPosts } from '../../types/PreparedPosts';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPosts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
