import React from 'react';
import './PostList.scss';

import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  posts: FullPost[];
}

export const PostList: React.FC<Props> = ({ posts = [] }) => {
  return (
    <div className="PostList">

      {posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}

    </div>
  );
};
