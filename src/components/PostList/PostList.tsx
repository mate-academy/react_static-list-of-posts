import React from 'react';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comment';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[];
  users: User[];
  comments: Comment[];
}

export const PostList: React.FC<Props> = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo
        key={post.id}
        post={post}
        comments={comments}
        users={users}
      />
    ))}
  </div>
);
