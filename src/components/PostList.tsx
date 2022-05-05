import React from 'react';

import { Post } from '../Types/Post';

import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="post-list">
    {
      posts.map((post) => (
        <section key={post.id} data-cy="post-info">
          <PostInfo post={post} />
        </section>
      ))
    }
  </div>
);
