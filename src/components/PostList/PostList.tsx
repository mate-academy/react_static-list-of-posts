import React from 'react';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

export type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} />
      </React.Fragment>
    ))}
  </div>
);
