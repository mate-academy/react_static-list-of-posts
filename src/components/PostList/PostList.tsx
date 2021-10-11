import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <ul className="list">
      {posts.map((post: Post) => (
        <li
          key={post.id}
          className="list__elem"
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </>
);
