import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <div className="box">
      <p className="author">
        <User name={user.name} email={user.email} />
      </p>
      <h1 className="subtitle">{`${title.toUpperCase()}`}</h1>
      <p className="content">
        {`${body[0].toUpperCase()}${body.substring(1)}.`}
      </p>
      <CommentList comments={comments} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
