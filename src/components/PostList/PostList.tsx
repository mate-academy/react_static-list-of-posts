import React from 'react';
import { PreparedPostType } from '../../Types/PreparedPostType';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: PreparedPostType[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="posts">
    {preparedPosts.map((post: PreparedPostType) => (
      <li key={post.id} className="posts__post">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
