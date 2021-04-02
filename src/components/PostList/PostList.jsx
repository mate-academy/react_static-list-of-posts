import React from 'react';

import { CommentList } from '../CommentList';
import { Post } from '../Post';
import { User } from '../User';

export const PostList = ({ postList }) => (
  postList.map(post => (
    <div key={post.id}>
      <Post {...post} />
      <User {...post.user} />
      <CommentList commentList={post.comments} />
    </div>
  ))
);
