import React from 'react';
import { ExtendedPost } from '../../app.typedef';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

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
