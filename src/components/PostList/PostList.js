import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostShape } from '../ComponentsShapes';

export const PostList = ({ preparedPosts }) => (
  <div className="posts">
    {preparedPosts.map(post => (
      <React.Fragment key={post.id}>
        <div>
          <Post post={post} />
        </div>
      </React.Fragment>
    ))
    }
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PostShape).isRequired,
};
