import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, name, email, address, comments }) => (
  <>
    <h3>
      Name:
      {' '}
      {title}
    </h3>
    <section>
      {body}
    </section>
    <User name={name} email={email} {...address} />
    <CommentList comments={comments} />
  </>
);

Post.defaultProps = {
  body: '',
  comments: [],
};
Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};
