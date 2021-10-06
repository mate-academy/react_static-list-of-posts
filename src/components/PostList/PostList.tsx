import React from 'react';

import './PostList.scss';
import { Post } from '../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <section className="container">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </section>
);
