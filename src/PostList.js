import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts, users, comments }) => (
  <section className="post__list">
    {posts.map(post => <Post post={post} users={users} comments={comments} />)}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
};

PostList.defaultProps = {
  posts: [{}],
  users: [{}],
  comments: [{}],
};

export default PostList;
