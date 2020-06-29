import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';
import { postShape } from './Post/props';
import { Post } from './Post/Post';

export const PostList = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (

      <div className="post" key={post.id}>
        <Post {...post} />
      </div>

    ))}
  </>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(postShape).isRequired,
};
