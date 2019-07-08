import React from 'react';

import PropTypes from 'prop-types';
import users from '../api/users';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => {
  const filteredUsers = users.filter(user => user.id === post.userId);
  const Users = filteredUsers.map(user => <User key={user.id} user={user} />);
  const Comments = CommentList({ post });
  return (
    <div className="Post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{Users}</p>
      <p>{Comments}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
