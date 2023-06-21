import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

import { Posts } from '../../types/Posts';
import { Comments } from '../../types/Comments';
import { Users } from '../../types/Users';

type Props = {
  posts: Posts[];
  comments: Comments[];
  users: Users[];
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
