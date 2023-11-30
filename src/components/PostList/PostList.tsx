import { FC } from 'react';
import { PostsProps } from '../../types';
import { PostInfo } from '../PostInfo';

export const PostList: FC<PostsProps> = ({ posts }) => (
  <div className="PostList">
    {
      posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </div>
);
