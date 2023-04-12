import React from 'react';
import { PostInfo } from '../PostInfo';
import { PreparedPost } from '../../types/PreparedPost';

interface Props {
  preparedPosts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="PostList">
    {preparedPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
