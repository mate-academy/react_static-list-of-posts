import React from 'react';
import './Post.scss';

import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <section className="post">
    <h2 className="post__title">
      {title}
    </h2>

    <p className="post__body">
      {body}
    </p>

    <User {...user} />

    <CommentList comments={comments} />
  </section>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
