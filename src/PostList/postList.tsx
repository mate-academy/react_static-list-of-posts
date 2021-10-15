import React from 'react';
import { PostInfo } from '../PostInfo/postInfo';
import { Post } from '../types/Post';
import './postList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo posts={post} />
        </li>
      ))}
    </ul>
  );
};
