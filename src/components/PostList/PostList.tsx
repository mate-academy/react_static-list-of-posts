import React from 'react';
import './PostList.scss';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Posts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostInfo">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
