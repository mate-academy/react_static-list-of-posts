import React from 'react';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {
      posts.map((post) => (
        <section className="post" key={post.id}>
          <PostInfo post={post} />
        </section>
      ))
    }
  </>
);
