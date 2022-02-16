import React from 'react';
import './Postlist.scss';

import { PreparedPost } from '../../Types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts = [] }) => (
  <ul>
    {preparedPosts.map((post) => (
      <li className="post__list" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
