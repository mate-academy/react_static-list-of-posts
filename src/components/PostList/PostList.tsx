import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li className="post" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
