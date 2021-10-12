import React from 'react';

import './PostList.scss';

import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="posts-list">
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
