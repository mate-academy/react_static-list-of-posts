import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/post';
import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="list">
    {preparedPosts.map(item => (
      <li
        key={item.id}
        className="list__item"
      >
        <PostInfo post={item} />
      </li>
    ))}
  </ul>
);
