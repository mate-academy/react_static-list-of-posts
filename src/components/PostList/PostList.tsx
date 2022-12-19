import React from 'react';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Posts[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="posts">
    {
      preparedPosts.map((post) => (
        <PostInfo
          post={post}
          key={post.id}
        />
      ))
    }
  </ul>
);
