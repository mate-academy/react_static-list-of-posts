import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  postList: Post[],
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="PostList">
    {
      postList.map((post) => (
        <li data-cy="post-info">
          <PostInfo
            key={post.id}
            post={post}
          />
        </li>
      ))
    }
  </ul>
);
