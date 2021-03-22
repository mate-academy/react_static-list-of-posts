import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <>
    <div className="postList">
    {posts.map((post) => (
          <Post
            post={post}
            key={post.id}
          />
    ))}
      <br />
    </div>
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          body: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
        })
      ),
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  )
};
