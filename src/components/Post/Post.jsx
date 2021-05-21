import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentsList } from '../CommentsList/CommentsList';
import { TypeUser, TypeComments } from '../../types';

export const Post = ({ title, body, user, comments }) => (
  <>
    <User {...user} />

    <h2>
      {title}
    </h2>

    <p>
      {body}
    </p>

    <br />

    <CommentsList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

  user: TypeUser.isRequired,
  comments: PropTypes.arrayOf(TypeComments).isRequired,
};
