import React from 'react';
import { PostInfo } from '../PostInfo';
import { type Post } from '../../types/Post';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return posts.map((post: Post) => <PostInfo post={post} key={post.id} />);
};
