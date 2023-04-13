import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

interface Props {
  preparedPost: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ preparedPost }) => (
  <div className="PostList">
    {preparedPost.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
