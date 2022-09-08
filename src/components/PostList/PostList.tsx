import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <section className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </section>
);
