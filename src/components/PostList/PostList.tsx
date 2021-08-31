import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <section className="blog">
    {posts?.map(post => (
      <article className="blog__post post" key={post.id}>
        <PostInfo post={post} />
      </article>
    ))}
  </section>
);
