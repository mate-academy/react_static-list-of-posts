import PropTypes from 'prop-types';
import React from 'react';
import './Post.scss';

import { User } from '../User';
import { TypeUser, TypeComments } from '../../Types/types';

export function Post({
  title,
  body,
  user,
  comments,
}) {
  return (
    <li className="post__item">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      <User
        user={user}
        comments={comments}
      />
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};
