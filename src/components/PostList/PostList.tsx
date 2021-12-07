import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../types/PreparedPost';

import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => {
  return (
    <ul className="posts">
      {
        preparedPosts.map(post => (
          <li className="posts__post" key={post.id}>
            <PostInfo {...post} />
          </li>
        ))
      }
    </ul>
  );
};
