import React from 'react';
import PropTypes from 'prop-types';
import Post from './post/post';

function PostList({ conditionPosts }) {
  return (
    <ul>
      {conditionPosts.map(post => (

        <Post
          post={post}
        />

      ))}

    </ul>

  );
}

PostList.propTypes = {
  conditionPosts: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default PostList;
