import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comment';

type Props = {
  posts: Post[];
  users: User[];
  comments: Comment[];
};

export const PostList: React.FC<Props> = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map((post: Post) => (
      <PostInfo 
        post={post}
        users={users}
        comments={comments}
        key={post.id}
      />
    ))}
  </div>
);
