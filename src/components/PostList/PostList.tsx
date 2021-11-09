import React from 'react';
import { PreparedPosts } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  postList: PreparedPosts[];
}

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post__list">
    {
      postList.map((post) => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </ul>
);
