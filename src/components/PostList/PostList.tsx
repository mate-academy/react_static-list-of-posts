import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type PostListListProps = {
  posts: Post[]
};

export const PostList: React.FC<PostListListProps> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post) => {
      return (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      );
    })}
  </ul>
);
