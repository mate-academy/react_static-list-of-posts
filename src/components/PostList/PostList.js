import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id} className="post">
        <Post
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.shape({
          email: PropTypes.string,
          suite: PropTypes.string,
          city: PropTypes.string,
          zipcode: PropTypes.string,
        }).isRequired,
      }).isRequired,
      comments: PropTypes.arrayOf({
        postId: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        body: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
