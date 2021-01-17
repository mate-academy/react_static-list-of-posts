import React from 'react';
import PropTypes from 'prop-types';
import { AddressType } from '../../types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({ pablication }) => (
  <li className="list__item">
    <div className="list__core">
      <h2 className="list__title">{pablication.title}</h2>
      <p className="list__post">{pablication.body}</p>

      <User {...pablication.user} />
    </div>

    <CommentList responses={pablication.comments} />
  </li>
);

Post.propTypes = {
  pablication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: AddressType.isRequired,
    }),
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })),
  }).isRequired,
};
