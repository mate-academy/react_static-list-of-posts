import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(postInfo => (
      <PostInfo key={postInfo.id} post={postInfo} />
    ))}
  </div>
);
