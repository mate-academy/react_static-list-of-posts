import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = props => {
  const { posts } = props;

  return (
    <div className="post-list columns is-multiline is-variable is-8 is-centered">
      {posts.map(post => (
        <PostInfo post={post} />
      ))}
    </div>
  );
};
