import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="postList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
