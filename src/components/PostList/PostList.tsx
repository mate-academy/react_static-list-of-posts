import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <section className="post-list">
    {posts.map(post => (
      <article className="post-list__item" key={post.id}>
        <PostInfo post={post} />
      </article>
    ))}
  </section>
);
