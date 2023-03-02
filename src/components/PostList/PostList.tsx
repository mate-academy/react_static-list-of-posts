import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Post';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <PostInfo
          key={post.id}
          post={post}
        />
      ))
    }
  </ul>
);
