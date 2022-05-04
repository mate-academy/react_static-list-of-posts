import React from 'react';
import { PreparedPost } from '../../types/types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  postList: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="postList">
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
