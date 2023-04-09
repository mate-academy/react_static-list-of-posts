import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/index';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => <PostInfo post={post} />)}
  </>
);
