import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <article className="Post">
    <h2 className="Post__title">{title}</h2>
    <div className="Post__info">
      { user && <User className="Post__author" {...user} />}
      <section className="Post__body">
        {body}
      </section>
    </div>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Post.defaultProps = {
  body: 'Post content is empty',
  user: null,
  comments: [],
};
