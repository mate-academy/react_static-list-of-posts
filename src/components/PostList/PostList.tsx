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
      <article className="post" key={post.id}>
        <PostInfo {...post} />
      </article>
    ))}
  </section>
);
