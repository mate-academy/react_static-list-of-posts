import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Posts = {
  posts: Post[];
};

export const PostList: React.FC<Posts> = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map(({
      id,
      title,
      user,
      body,
      comments,
    }) => (
      <div className="PostInfo" key={id}>
        <PostInfo
          title={title}
          user={user}
          body={body}
          comments={comments}
        />
      </div>
    ))}
  </div>
);
