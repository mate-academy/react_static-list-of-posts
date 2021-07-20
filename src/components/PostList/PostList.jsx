import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post, TypePost } from '../Post';

export const PostList = ({ posts }) => (
  posts.map(
    post => (
      <React.Fragment key={post.id}>
        <Post
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </React.Fragment>
    ),
  )
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(TypePost).isRequired).isRequired,
};
