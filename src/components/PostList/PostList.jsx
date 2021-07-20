import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from '../types';
import { Post } from '../Post';

export const PostList = function PostList({ posts }) {
  return (
    <ul className="content">
      {posts.map(post => (
        <li key={post.id}>
          <Post
            userId={post.userId}
            title={post.title}
            body={post.body}
            user={post.user}
            comments={post.comments}
          />
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf({
    PostType,
  }).isRequired,
};
