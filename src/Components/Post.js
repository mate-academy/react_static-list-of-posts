import React from 'react';
import PropTypes from 'prop-types';

import { CommentList } from './CommentList';
import { User } from './User';

export const Post = ({ user, title, body, id }) => (
  <li>
    <div>
      <b>{'title - '}</b>
      {title}
    </div>
    <div>
      <b>{'body - '}</b>
      {body}
    </div>
    <User {...user} />
    <CommentList postId={id} />
    <hr />
  </li>
);

Post.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
