import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ genericPosts }) => (
  <section className="post">
    {genericPosts.map(post => (
      <article className="post__wrap">
        <Post post={post} key={post.id} />
      </article>
    ))}
  </section>
);

export default PostList;

PostList.propTypes = {
  genericPosts: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
