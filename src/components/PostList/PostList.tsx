import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div className="PostList">

    {preparedPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
