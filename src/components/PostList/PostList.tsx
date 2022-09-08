import React from 'react';
import './PostList.scss';
import { PostWithComment } from '../../types/postWithComment';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PostWithComment[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => <PostInfo key={post.id} post={post} />)}
  </div>
);
