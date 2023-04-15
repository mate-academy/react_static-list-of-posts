import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

interface Props {
  Posts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({ Posts }) => (
  <div className="PostList">
    {
      Posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </div>
);
