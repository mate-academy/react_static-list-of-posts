import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <section className="posts">
    <div className="posts__container">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  </section>
);
