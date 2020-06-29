import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = (props) => {
  const { posts } = props;

  return (
    <ul className="posts">
      {
        posts.map(currentPost => (
          <li>
            <Post post={currentPost} key={currentPost.id} />
          </li>
        ))
      }
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
