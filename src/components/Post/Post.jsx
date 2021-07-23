import React from 'react';
import PropTypes from 'prop-types';

import { CommentList } from '../CommentList';
import { User } from '../User';
import { UserType, CommentType } from '../../types';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
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
        <User user={user} />
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
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape(UserType).isRequired,
    comments: PropTypes.shape(CommentType).isRequired,
  }).isRequired,
};
