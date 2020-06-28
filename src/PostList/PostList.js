import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';
import { postProp } from './Post/props';
import { Post } from './Post/Post';

export const PostList = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (

      <div className="Post" key={post.id}>
        <Post {...post} />
      </div>

    ))}
  </>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(postProp).isRequired,
};
