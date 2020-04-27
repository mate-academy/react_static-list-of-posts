import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
