import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import User from '../user/User';
import CommentList from '../commentList/CommentList';

const Post = ({ title, body, user, comments }) => (
  <section className="post">

    <h2 className="post__title">
      {title[0].toUpperCase() + title.slice(1)}
    </h2>

    <User {...user} comments={comments} />

    <article className="post__text">
      {body[0].toUpperCase() + body.slice(1)}
    </article>

    <CommentList comments={comments} />
  </section>

);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf({}).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
