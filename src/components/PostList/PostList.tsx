import React from 'react';

import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(postItem => (
      <PostInfo
        post={postItem}
        key={postItem.id}
      />
    ))}
  </div>
);
