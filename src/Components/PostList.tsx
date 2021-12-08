import React from 'react';
import { PostInfo } from './PostInfo';
import { Post } from '../Types/Post';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="postList">
      {posts.map((post) => {
        return (
          <div key={post.id} className="postList_post post">
            <PostInfo post={post} />
          </div>
        );
      })}
    </div>
  );
};
