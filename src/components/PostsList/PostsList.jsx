import React from 'react';
import PropTypes from 'prop-types';
import { postType } from '../types';
import Post from '../Post/Post';

const PostsList = ({ posts }) => (
  <ul>
    {posts.map((post, index) => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
        // index={index + 1}
        // id={post.id}
      />
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(postType.isRequired).isRequired,
};

export default PostsList;
