import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';

import { Post } from '../Post';
import { postType } from '../../propTypes/postType';

export const PostList = ({ posts }) => (
  <ul className="post__list">
    {
      posts.map(post => (
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
  posts: PropTypes.arrayOf(postType).isRequired,
};
