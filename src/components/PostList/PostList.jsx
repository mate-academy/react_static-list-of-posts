import React from 'react';
import PropTypes from 'prop-types';
import { postTypes } from '../../postTypes';

import comments from '../../api/comments';
import users from '../../api/users';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <Post
          post={post}
          users={users}
          comments={comments}
        />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.objectOf(postTypes).isRequired,
};
