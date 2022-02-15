import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  posts:Post[],
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul className="posts__list">
    {posts.map(post => {
      return (
        <li>
          <PostInfo post={post} />
        </li>
      );
    })}
  </ul>
);
