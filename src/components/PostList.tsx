import React from 'react';

import './PostList.scss';

import Post from '../types/Post';

import PostInfo from './PostInfo';

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => (
  <div className="list">
    {posts.map(Currpost => (
      <PostInfo post={Currpost} />
    ))}
  </div>
);

export default PostList;
