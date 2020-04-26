import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostsList.scss';

function PostsList({ posts }) {
  return (
    <div className="container">
      {posts.map(post => <Post {...post} key={post.id} />)}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostsList;
