import React from 'react';
import './PostList.scss';
import { ExtendedPost, ListProp } from '../../typedefs';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList: React.FC<ListProp<ExtendedPost>> = (listProp) => (
  <ul>
    {listProp.list.map(post => (
      <li key={post.id} className="post">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
