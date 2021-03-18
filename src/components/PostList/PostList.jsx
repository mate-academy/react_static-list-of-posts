import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id}>
        <Post
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
          street: PropTypes.string.isRequired,
          suite: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }),
  ).isRequired,
};
