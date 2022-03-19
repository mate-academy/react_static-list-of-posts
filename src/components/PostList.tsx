import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div className="posts-list__post post">
          <PostInfo
            title={post.title}
            body={post.body}
            user={post.user}
            comment={post.comment}
          />
        </div>
      ))}
    </div>
  );
};
