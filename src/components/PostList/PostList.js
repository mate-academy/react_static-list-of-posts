import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <div className="posts__post" key={post.id}>
        <Post
          title={post.title}
          body={post.body}
          author={post.author}
          comments={post.comments}
        />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
