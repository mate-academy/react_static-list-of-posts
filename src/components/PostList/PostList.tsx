import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <section className="list">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </section>
  );
};
