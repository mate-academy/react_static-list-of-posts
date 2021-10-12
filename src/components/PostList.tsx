import React from 'react';
import { PostsType } from '../types/PostsType';
import { PostInfo } from './PostInfo';

type Props = {
  posts: PostsType[];
};

export const PostList: React.FC<Props> = props => {
  const { posts } = props;

  return (
    <div className="board">
      {posts.map(post => (
        <PostInfo post={post} />
      ))}
    </div>
  );
};
