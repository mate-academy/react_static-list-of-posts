import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  postList: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="list">
    {
      postList.map(post => (
        <li className="list__item item" key={post.id}>
          <PostInfo {...post} />
        </li>
      ))
    }
  </ul>
);
