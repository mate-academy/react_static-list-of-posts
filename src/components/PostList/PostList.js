import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.scss';
import { PostType } from '../../types';

const PostList = ({ posts }) => (
  <section className="post-list">
    {posts.map(post => (
      <Post
        post={post}
        user={post.user}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};

export default PostList;
