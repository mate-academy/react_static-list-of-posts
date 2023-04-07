import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="PostInfo">
    {posts.map(item => (
      <PostInfo
        key={item.id}
        post={item}
      />
    ))}
  </div>
);
