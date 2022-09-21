import React from 'react';
import { PostInfo } from '../PostInfo';

import { PostListType } from '../../types/PostListType';

type PostListTypes = {
  posts: PostListType[];
};

export const PostList: React.FC<PostListTypes> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </div>
);
