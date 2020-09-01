import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './postList.css';

export const PostList = ({ posts, users, comments }) => (
  <section className="posts">
    {posts.map(post => (
      <Post
        post={post}
        user={users.find(user => user.id === post.userId)}
        commentsList={comments.filter(comment => (
          comment.postId === post.userId
        ))}
        key={post.id}
      />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
