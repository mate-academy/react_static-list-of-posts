import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post'


export const PostsList = ({ posts }) => (
  <div className='postsList'>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
)
