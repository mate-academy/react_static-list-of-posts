import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostType } from '../ListTypes';

export const PostList = ({ posts }) => (
  <ul className="container">
    {posts.map(post => (
      <li key={post.id}>
        <Post
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
