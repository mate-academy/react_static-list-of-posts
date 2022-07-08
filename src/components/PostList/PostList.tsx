import React from 'react';
// eslint-disable-next-line import/no-cycle
import { PreparedPosts } from '../../App';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPosts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post__list">
    {posts.map((post) => (
      <li key={post.title}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
