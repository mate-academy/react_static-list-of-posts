import React from 'react';
import { PrepearedPost } from '../../types/PrepearedPosts';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  post: PrepearedPost[],
}

export const PostList: React.FC<Props> = ({ post }) => (
  <ul>
    {post.map(el => {
      return (
        <li key={el.id}>
          <PostInfo post={el} />
        </li>
      );
    })}
  </ul>
);
