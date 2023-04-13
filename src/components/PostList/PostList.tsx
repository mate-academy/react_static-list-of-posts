import React from 'react';
import { PostInfo } from '../PostInfo';
import { PreparedPost } from '../../types/PreparedPost';

interface Props {
  preparedPost: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ preparedPost }) => (
  <div className="PostList">
    {preparedPost.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
