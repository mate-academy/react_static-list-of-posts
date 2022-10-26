import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(postItem => (
      <PostInfo
        post={postItem}
        key={postItem.id}
      />
    ))}
  </ul>
);
