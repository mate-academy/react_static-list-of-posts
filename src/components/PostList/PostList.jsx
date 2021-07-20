import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

import './PostList.css';
import { TypeId } from '../Types';

function PostList({ postList }) {
  return (
    <div className="post-list">
      {postList.map(post => (
        <div key={post.id} className="post-article">
          <Post posts={post} />
          <User user={post.user} />
          <CommentList comments={post.comment} />
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.arrayOf(TypeId).isRequired,
};

export default PostList;
