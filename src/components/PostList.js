import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

function PostList(props) {
  return (
    <ul className="post-list">
      {props.posts.map(post => (
        <Post
          post={post}
        />
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
