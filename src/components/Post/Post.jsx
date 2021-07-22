import React from 'react';
import PropTypes from 'prop-types';

import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { UserType, CommentType } from '../../types';

export const Post = ({ title, body, user, comments }) => (
  <ul className="list-group list-group-flush">
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      <h1 className="title">
        {title}
      </h1>
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      {body}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      <User {...user} />
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      <CommentList comments={comments} />
    </li>
  </ul>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comments: PropTypes.shape(CommentType).isRequired,
};
