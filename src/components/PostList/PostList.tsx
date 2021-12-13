import React from 'react';
import { PreparedPost } from '../../typedefs/PreparedPost';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

interface Props {
  readyPosts: PreparedPost[],
}

export const PostList: React.FC<Props> = ({ readyPosts }) => (
  <ul className="post-list">
    {readyPosts.map(post => (
      <PostInfo singlePost={post} key={post.id} />
    ))}
  </ul>
);
