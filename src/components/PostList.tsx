import React from 'react';
import { PreparedPosts } from './User';
import { PostInfo } from './PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPosts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList" data-cy="post-info">
    {posts.map(post => (
      <li className="PostList__items">
        <PostInfo post={post} key={post.id} />
      </li>
    ))}
  </ul>
);
