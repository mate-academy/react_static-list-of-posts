import React from 'react';
import { PostInfo } from '../Post';
import { Post } from '../../types';
import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map(post => (
        <li className="posts__item post" key={post.id}>
          <PostInfo {...post} />
        </li>
      ))}
    </ul>
  );
};
