import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="list">
      {posts.map(post => (
        <li className="list__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
