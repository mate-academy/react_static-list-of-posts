import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostShape } from '../propTypes/post';

export const PostList = ({ postlist }) => (
  <>
    {
      postlist.map(post => (
        <ul className="postList" key={post.id}>
          <Post {...post} />
        </ul>
      ))
    }
  </>
);

PostList.propTypes = {
  postlist: PropTypes.arrayOf(PostShape).isRequired,
};
