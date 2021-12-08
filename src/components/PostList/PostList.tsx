import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="posts">
    {preparedPosts.map(post => (
      <li className="posts__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
