import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.scss';

const PostList = ({ posts }) => (
  <ul className="posts">
    {
      posts.map(post => (
        <li className="post__container" key={post.id}>
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

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PostList;
