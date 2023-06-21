import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

type Props = {
  posts: Post[];
  comments: Comment[];
  users: User[];
};

export const PostList: React.FC<Props> = ({ posts, comments, users }) => (
  <div className="PostList">
    {
      posts.map(post => (
        <PostInfo
          post={post}
          key={post.id}
          comments={comments}
          userId={post.userId}
          users={users}
        />
      ))
    }
  </div>
);
