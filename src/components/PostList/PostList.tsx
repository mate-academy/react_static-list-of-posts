import React from 'react';
import { PostInfo } from '../PostInfo';
import { Comment, Post, User } from '../../types';

type Props = {
  posts: Post[]
  users: User[]
  comments: Comment[]
};

export const PostList: React.FC<Props> = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const postUser = users.find(user => user.id === post.userId) as User;
      const postC = comments.filter(comment => comment.postId === post.id);

      return (
        <PostInfo post={post} user={postUser} comments={postC} key={post.id} />
      );
    })}
  </div>
);
