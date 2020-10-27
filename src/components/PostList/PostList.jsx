import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostShape } from '../propTypes/post';

export const PostList = ({ postlist }) => (
  <ul className="postList">
    {
      postlist.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </ul>
);

PostList.propTypes = {
  postlist: PropTypes.arrayOf(PostShape).isRequired,
};
