import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type PostsProps = {
  posts: Post[];
};

export const PostList: React.FC<PostsProps> = ({ posts }) => {
  const postList = posts.map((post) => {
    return <PostInfo post={post} key={post.id} />;
  });

  return <div className="PostList">{postList}</div>;
};
