import React from 'react';
import { FullPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: FullPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (<PostInfo post={post} key={post.id} />))}
  </ul>
);
