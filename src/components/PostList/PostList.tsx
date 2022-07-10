import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="App__posts">
    {preparedPosts.map(post => (
      <li className="App__post" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
