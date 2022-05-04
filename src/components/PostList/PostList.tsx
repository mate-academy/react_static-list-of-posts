import React from 'react';
import { Post } from '../type/post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul data-cy="post-info" className="post-list">
    {posts.map(elem => (
      <li key={elem.id}>
        <PostInfo post={elem} />
      </li>
    ))}
  </ul>
);
