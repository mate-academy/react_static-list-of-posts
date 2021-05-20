import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './post.scss';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="list__title">
      {title}
    </h2>

    <p className="list__body">
      {body}
    </p>

    <div className="list__users">
      <User {...user} />
    </div>

    <div className="list__comments">
      <CommentList comment={comments} />
    </div>
  </>
);

const user = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

const comment = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
).isRequired;

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: user,
  comments: comment,
};
