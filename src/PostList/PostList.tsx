import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../types/Post';
import './PostList.scss';

type Props = {
  preparePosts: Post[]
};

export const PostList: React.FC<Props> = ({ preparePosts }) => (
  <ul>
    {preparePosts.map(post => (
      <li className="post__item" key={post.id}>
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
