import React from 'react';
import { Post } from '../Post/Post';

import posts from '../../api/posts';
import users from '../../api/users';
import comments from '../../api/comments';

const postsWidthAllInfo = posts.map(post => {
  post.user = users.find(user => user.id === post.userId);
  post.comments = comments.filter(comment => comment.postId === post.userId);

  return post;
});

export const PostList = () => (
  <ul>
    {postsWidthAllInfo.map(post => (
      <li key={post.id}>
        <Post {...post}/>
      </li>
    ))}
  </ul>
);
