import React from 'react';
import { PostList } from '../PostList/PostList';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  posts: Post[];
};

export const PostInfo: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li
        key={post.id}
        className="post"
      >
        <PostList post={post} comment={[]} />
      </li>
    ))}
  </ul>
);
