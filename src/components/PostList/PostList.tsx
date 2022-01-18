import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../Types/Types';
import './PostList.scss';

type Props = {
  posts: PreparedPost[];
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    <h1 className="post-list__title">List of posts</h1>
    {posts.map((post) => (
      <li className="post-list__item" key={post.id}>
        <PostInfo onePost={post} />
      </li>
    ))}
  </ul>
);
