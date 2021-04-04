import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({
  user,
  title,
  body,
  comment,
}) => (
  <>
    <p>{title}</p>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comment} />
  </>
);

Post.propTypes = {
  user: PropTypes.shape(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape(PropTypes.shape({
      city: PropTypes.string.isRequired,
      geo: PropTypes.shape(PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      })),
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    })),
    company: PropTypes.object.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  })).isRequired,
  comment: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
