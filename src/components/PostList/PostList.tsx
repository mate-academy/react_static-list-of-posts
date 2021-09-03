import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

interface Prop {
  posts: Post[];
}

export const PostList: React.FC<Prop> = ({ posts }) => (
  <section className="posts">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <PostInfo posts={post} />
      </div>
    ))}
  </section>
);
