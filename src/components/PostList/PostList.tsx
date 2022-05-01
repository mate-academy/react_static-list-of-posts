import React from 'react';

import './PostList.scss';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="post-list" data-cy="post-info">
    {
      posts.map((post) => (
        <section className="post" key={post.id}>
          <PostInfo post={post} />
        </section>
      ))
    }
  </div>
);
