import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Comments from './Comments';

const Post = ({ post }) => (
  <>
    <h1 className="post__title title">
      {post.title}
    </h1>
    <article className="post__body text">
      {post.body}
    </article>
    <section className="post__user author">
      <User user={post.user} />
    </section>
    <Comments comments={post.postComments} />
  </>
);

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ])),
};
Post.defaultProps = { post: [] };
export default Post;
