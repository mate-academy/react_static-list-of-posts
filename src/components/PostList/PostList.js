import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';
import { Post } from '../Post/Post';

export const PostList = (props) => {
  const { posts, users, comments } = props;

  return (
    <ul className="postList">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          user={users.find(item => item.id === post.userId)}
          comments={comments.filter(item => item.postId === post.id)}
        />
      ))}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.shape().isRequired,
  users: PropTypes.shape().isRequired,
  comments: PropTypes.shape().isRequired,
};
