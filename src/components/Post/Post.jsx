import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h1>
      {title}
    </h1>
    <p>
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }),
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

Post.defaultProps = {
  user: null,
};
