import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../post/post';
import { TypeUser, TypeComment } from '../../type';

import './postlist.scss';

export const PostList = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <div key={post.id} className="container-comment">
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: TypeUser.isRequired,
    comments: PropTypes.arrayOf(
      TypeComment.isRequired,
    ).isRequired,
  }).isRequired,
};
