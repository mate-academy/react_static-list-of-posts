import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface PostListProps {
  preparedPosts: PreparedPosts[],
}

export const PostList: React.FC<PostListProps> = ({
  preparedPosts,
}: PostListProps) => (
  <div className="post">
    {preparedPosts.map((post: PreparedPosts)=> (
      <PostInfo post={post} />
    ))}
  </div>
);
