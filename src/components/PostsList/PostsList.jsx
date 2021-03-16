import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostsList.scss';

export const PostsList = ({ posts }) => (
  <ul className="Posts">
    {
      posts.map(post => (
        <li className="Post Post__wrapper" key={post.id}>
          <Post
            title={post.title}
            body={post.body}
            comments={post.comments}
            user={post.user}
          />
        </li>
      ))
    }
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
