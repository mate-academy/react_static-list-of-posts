import React from 'react';
import { userPostCommentType } from '../../types';
import './User.scss';

export const User = ({ post }) => (
  <div className="user">
    <h4 className="user__name-email">
      {`${post.user.name}  ${post.user.email}`}
    </h4>

    <h5 className="user__address">
      {`${post.user.address.street},
        ${post.user.address.suite},
        ${post.user.address.city}`}
    </h5>
  </div>
);

User.propTypes = {
  post: userPostCommentType.isRequired,
};
