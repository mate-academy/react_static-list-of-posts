import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';
import User from '../User';
import './postlist.css';

const PostList = ({ title, body, user, comments }) => (
  <div className="post-list">
    <User
      name={user.name}
      username={user.username}
      email={user.email}
      address={user.address}
    />

    <Post
      title={title}
      body={body}
      comments={comments}
    />
  </div>
);

PostList.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

PostList.defaultProps = {
  comments: null,
};

export default PostList;
