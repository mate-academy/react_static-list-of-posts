import React from 'react';
import PropTypes from 'prop-types';

import { TypeUser, TypeComments } from '../../types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export function Post({ title, body, user, comments }) {
  return (
    <div className="post">
      <h2 className="post_title">{ title }</h2>
      <p className="post_body">{ body }</p>
      <User {...user} />
      <CommentList comments={comments} />
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};
