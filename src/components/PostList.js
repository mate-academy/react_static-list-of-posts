import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

const PostList = ({ posts }) => (
  <>
    {
      posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          text={post.body}
          user={post.user}
          comments={post.comments}
        />
      ))
    }
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
          street: PropTypes.string.isRequired,
          suite: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
