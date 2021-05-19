import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ posts, users, comments }) => (
  <div className="posts">
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
        user={users.find(user => user.id === post.userId)}
        comments={comments.filter(comment => comment.postId === post.id)}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PostList;
