import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { TypeUser, TypeComment } from '../../type';

import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="title">
      {title}
    </h2>
    <p className="post">
      {`" ${body} " `}
    </p>
    <User {...user} />
    <div>
      <CommentList comments={comments} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
