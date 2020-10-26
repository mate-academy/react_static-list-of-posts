import React from 'react';

import PropTypes from 'prop-types';
import { User } from './user';
import { CommentsList } from './commentsList';
import { userPropTypes, commentsListPropTypes } from './propertiesVar';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
    <p>
      <User {...user} />
    </p>
    <CommentsList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(userPropTypes).isRequired,
  ...commentsListPropTypes,
};
