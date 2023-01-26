import React from 'react';
import { PostComplete } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostComplete[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
