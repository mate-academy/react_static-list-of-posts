import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <>
    <ul className="">
      {posts.map(post => (
        <li key={post.id}>
          <Post
            user={post.user}
            title={post.title}
            body={post.body}
            comments={post.comments}
          />
        </li>
      ))}
    </ul>
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
