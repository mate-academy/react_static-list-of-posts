import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostStructure } from '../../types/PostStructure';

type Props = {
  posts: PostStructure[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
