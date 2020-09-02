import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.scss';

const PostList = ({ posts }) => (
  <section className="posts">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
