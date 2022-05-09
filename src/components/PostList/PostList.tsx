import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../types';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="postsList" data-cy="post-info">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
