import React from 'react';
import './PostList.scss';
import { ExtendedPost } from '../../typedefs';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: ExtendedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="post">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
