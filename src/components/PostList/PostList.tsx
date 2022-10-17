import React from 'react';
import { PostInfo } from '../PostInfo';
import { FullPost } from '../../Types/FullPost';

import './PostList.scss';

type Props = {
  posts: FullPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
