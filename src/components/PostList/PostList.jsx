import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../post/Post';

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
  preparedPosts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
