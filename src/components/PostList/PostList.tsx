import React from 'react';
import { ReadyPosts } from '../../types/ReadyPosts';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: ReadyPosts[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postList" data-cy="post-info">
    {posts.map(post => (
      <li className="postList__items" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
