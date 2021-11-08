import React from 'react';
import './PostList.scss';
import PostInfo from '../PostInfo';
import { PreparedPosts } from '../../typedefs';

type Props = {
  posts: PreparedPosts[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="list">
      {
        posts.map((post:PreparedPosts) => (
          <PostInfo key={post.id} post={post} />
        ))
      }
    </ul>
  );
};
