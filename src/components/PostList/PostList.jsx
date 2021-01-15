import React from 'react';
import PropTypes from 'prop-types';
import { postType } from '../../typesValidation';

import { Post } from '../Post';

import './postList.scss';

export const PostList = ({ posts }) => (
  <div className="postList">

    {posts.map(post => (
      <div className="post" key={post.id}>
        <Post {...post} />
      </div>
    ))}

  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postType).isRequired,
};
