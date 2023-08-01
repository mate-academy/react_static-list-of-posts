import React from 'react';
import { Post } from '../../types/Posts';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map((post: Post) => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
