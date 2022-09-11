import React from 'react';
import { PostInfo } from '../PostInfo';
import posts from '../../api/posts';
import users from '../../api/users';
import comments from '../../api/comments';

export const PostList: React.FC = () => (
  <div className="PostList">
    {(posts.map((post: {
      userId: number,
      id: number,
      title: string,
      body: string,
    }) => (
      <PostInfo
        post={{
          ...post,
          user: users.find(user => user.id === post.userId),
          comments: comments.filter(comment => comment.postId === post.id),
        }}
        key={post.id}
      />
    )))}
  </div>
);
