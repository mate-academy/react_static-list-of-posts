import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Test = {
  post: Posts[];
};

export const PostList: React.FC<Test> = ({ post }) => (
  <ul className="PostList">
    {post.map(element => (
      <li className="PostList__list" key={element.id}>
        <PostInfo post={element} />
      </li>
    ))}
  </ul>
);
