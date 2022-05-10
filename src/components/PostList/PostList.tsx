import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

import { Post } from '../../types/Post';

interface Props {
  props: Post[],
}

export const PostList: React.FC<Props> = ({ props }) => (
  <ul className="list" data-cy="comments-list">
    {props.map(post => (
      <li
        className="list__item"
        key={post.id}
      >
        <PostInfo props={post} />
      </li>
    ))}
  </ul>
);
