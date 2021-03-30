import React from 'react';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

import { Post } from '../Post';

posts.forEach(item => (item.author = users.find(user => user.id === item.userId)));
posts.forEach(item => (item.comments = comments.filter(comment => comment.postId=== item.id)));
const preparedforPosting = [...posts];
console.log(preparedforPosting)

export const PostList = () => (
  <>
    <div className="PostList">
      {preparedforPosting.map(item => (
        <div key={item.id}>
          <Post {...item} />
        </div>
      ))}
    </div>
  </>
);
