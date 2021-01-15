import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import { PostType } from '../Types/Type';

const PostList = ({ posts }) => (
  <section>
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};

export default PostList;
