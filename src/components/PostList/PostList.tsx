import React from 'react';
import { Comment } from '../../types/Comment';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
  users: User[];
  comments: Comment[];
};

export const PostList: React.FC<Props> = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} users={users} comments={comments} />
    ))}
  </div>
);
