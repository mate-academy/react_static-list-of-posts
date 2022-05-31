import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { FullPost } from '../../react-app-env';

type Props = {
  preparedPosts: FullPost[]
};
export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(post => (
      <li className="post-list__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>

);
