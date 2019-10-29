import React from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';

function PostList(props) {
  return (
    <>
      {props.posts.map(post => <Post post={post} />)}
    </>
  );
}

PostList.propTypes = {
  posts: PropTypes.isRequired,
};

export default PostList;
