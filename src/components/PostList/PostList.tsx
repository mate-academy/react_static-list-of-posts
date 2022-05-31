import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';
import { PreparedPost } from '../../app.typedef';

interface Props {
  posts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => {
      return (
        <PostInfo post={post} />
      );
    })}
  </>
);
