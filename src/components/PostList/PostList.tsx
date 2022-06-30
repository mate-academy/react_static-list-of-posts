import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostInfo key={post.id} {...post} />
    ))}
  </div>
);
