import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ posts, users, comments }) => (
  <section>
    {posts.map(post => (
      <Post
        post={post}
        user={users.find(user => user.id === post.userId)}
        postComments={comments.filter(comment => (
          comment.postId === post.userId
        ))}
        key={post.id}
      />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
