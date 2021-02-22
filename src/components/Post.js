import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { TypeComments, TypeUser } from '../types';

export const Post = ({ user, title, body, comments }) => (
  <>
    <div className="postStyle">
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
    <User user={user} comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};

export default Post;
