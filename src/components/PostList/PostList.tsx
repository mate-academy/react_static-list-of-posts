import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostFromServer } from '../../types/Post';

type Props = {
  posts: PostFromServer[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
