import React from 'react';

import { PostItem } from '../PostItem';

import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <div className="PostList__item">
          <PostItem key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
};
