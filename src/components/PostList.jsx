import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostType } from '../types';

export const PostList = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <li key={post.id} className="post">
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
