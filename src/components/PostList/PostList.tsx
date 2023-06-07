import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../api/types/posts';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => <PostInfo post={post} key={post.id} />)}
  </div>
);
