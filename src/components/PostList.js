import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import Post from './Post';
import comments from '../api/comments';

function PostList({
  posts,
}) {
  return (
    posts.map(elem => (
      <div className="container">
        <Post {...elem} />
        <CommentList coments={comments} currentPost={elem} />
      </div>
    ))
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }),
  ),
};

export default PostList;
