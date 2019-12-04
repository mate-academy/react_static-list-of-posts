import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post: { title, body, userData, comments } }) => (
  <article className="post">
    <h2>{title}</h2>

    <section className="post__main-part">
      <p className="post__body">
        {body}
      </p>

      <User user={userData} />
    </section>

    <CommentList comments={comments} />
  </article>
);

Post.propTypes = { post: PropTypes.shape.isRequired };

export default Post;
