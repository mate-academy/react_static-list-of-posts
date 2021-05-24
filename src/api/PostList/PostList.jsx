import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  posts.map(post => (
    <div className="post-list" key={post.id}>
      <Post {...post} />

      <div className="user" key={post.user.id}>
        <User {...post.user} />
      </div>

      <div className="comment-list">
        <CommentList comments={post.comments} />
      </div>
    </div>
  ))
);

CommentList.propTypes = {
  posts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default PostList;
