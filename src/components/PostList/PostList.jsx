import React from 'react';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

import { Post } from '../Post';

posts.map(item => (
  item.author = users.find(user => user.id === item.userId)
));

posts.map(item => (
  item.comments = comments.filter(comment => comment.postId === item.id)
));

const preparedforPosting = [...posts];

export const PostList = () => (
  <div className="PostList">
    <ul>
      {preparedforPosting.map(item => (
        <li key={item.id}>
          <Post {...item} />
        </li>
      ))}
    </ul>
  </div>
);
