import React from 'react';

import { PostInfo } from '../PostInfo';

import { PostType } from '../../types/PostType';

type Props = {
  posts: PostType[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
