import React from 'react';
import { FullPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: FullPosts[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="container">
    {preparedPosts.map(post => (
      <li key={post.id} className="list-item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
