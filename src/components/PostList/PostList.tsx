import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </ul>
);
