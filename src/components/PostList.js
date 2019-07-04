import React from 'react';
import users from '../api/users';
import User from './User';

function PostList() {
  return (
    <div className="post-list">
      {users.map(userData => (
        <User user={userData} />
      ))}
    </div>
  );
}

export default PostList;
