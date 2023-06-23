import React from 'react';

import './PostList.scss';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/post';
import { Comment } from '../../types/comment';
import { User } from '../../types/user';

type Props = {
  posts: Post[],
  comments: Comment[],
  users: User[],
};

export const PostList: React.FC<Props> = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map((post: Post) => (
      <PostInfo
        key={post.id}
        comments={comments}
        users={users}
        post={post}
      />
    ))}
  </div>
);
