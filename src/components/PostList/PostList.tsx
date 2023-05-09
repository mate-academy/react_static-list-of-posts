import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    { posts.map(item => (
      <PostInfo post={item} key={item.id} />
    ))}
  </div>
);
