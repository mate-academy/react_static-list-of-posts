import React from 'react';

import './PostList.scss';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = (props) => (
  <ul className="PostList">
    {props.posts.map(post => (
      <li
        className="PostInfo"
        key={post.id}
      >
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
