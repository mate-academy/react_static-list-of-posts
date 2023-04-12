import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

interface Props {
  preparedPosts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({
  preparedPosts,
}) => (
  <div className="PostList">
    {preparedPosts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
