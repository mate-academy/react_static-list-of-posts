import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostsList = ({ posts }) => (
  <article className="post-list">
    {posts.map(post => (
      <section
        className="post-list__post"
        key={post.id}
      >
        <Post post={post} />
      </section>
    ))}
  </article>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ])),
};
PostsList.defaultProps = { posts: [] };
export default PostsList;
