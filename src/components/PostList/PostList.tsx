import React from 'react';
import { ReadyPost } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  postList: ReadyPost[],
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post-list">
    { postList.map(post => (
      <li className="post-list__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    )) }
  </ul>
);
