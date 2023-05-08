import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: PreparedPost[];
}

export const PostList: React.FC<Props> = ({
  posts,
}) => (
  <div className="PostList">
    {posts.map((post) => {
      return (
        <PostInfo post={post} key={post.id} />
      );
    })}
  </div>
);
