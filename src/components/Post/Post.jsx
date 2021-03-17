import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentsList } from '../CommentsList';
import './Post.scss';

export const Post = ({ title, body, comments, user }) => (
  <>
    <User
      name={user.name}
      email={user.email}
      address={user.address}
    />
    <h2 className="Post__title">
      {title}
    </h2>
    <p className="Post__text">
      {body}
    </p>
    <CommentsList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.objectOf(PropTypes.shape({
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    })),
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.objectOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
      })),
    }),
  ).isRequired,
};
