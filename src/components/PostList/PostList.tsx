import React from 'react';

import './PostList.scss';

import { Post } from '../../types/interfaces';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="posts-list" data-cy="post-info">
    {posts.map(post => (
      <div className="post-list__item" key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
