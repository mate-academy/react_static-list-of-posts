import React from 'react';
import { PostInfo } from '../PostInfo';
import { FullPostType } from '../../types/FullPost';

import './PostList.scss';

interface PostListPropsType {
  posts: FullPostType[];
}

export const PostList: React.FC<PostListPropsType> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
