import React from 'react';
import './PostList.scss';
import { PostType } from '../../types/PostType';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PostType[];
};

export const PostList: React.FC <Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
