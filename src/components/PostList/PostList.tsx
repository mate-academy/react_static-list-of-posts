import React from 'react';
import './PostList.scss';
import { PreparedPost } from '../../types/interfaces';
import { PostInfo } from '../PostInfo';

type Props = {
  postList: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="PostList">
    {
      postList.map((post) => (
        <PostInfo
          key={post.id}
          post={post}
        />
      ))
    }
  </ul>
);
