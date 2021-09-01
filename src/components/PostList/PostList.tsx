import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <section className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </section>
  );
};
