import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

function Postlist({ posts }) {
  return posts.map(post => <Post key={post.id} post={post} />);
}

Postlist.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
};

export default Postlist;
