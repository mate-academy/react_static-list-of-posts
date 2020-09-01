import React from 'react';
import User from './User';

import users from '../api/users';

const Post = post => (
  <>
    <h3 className="post__title">{post.title}</h3>
    <p className="post__body">{post.body}</p>
    <User {...users.find(user => user.id === post.userId)} />
  </>
);

export default Post;
