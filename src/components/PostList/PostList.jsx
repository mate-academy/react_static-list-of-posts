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
  posts: PropTypes.array,
};
