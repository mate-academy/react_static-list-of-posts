import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { CommentShape, UserShape } from '../../propTypes';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="post__heading">
      {title}
    </h2>
    <h3 className="post__subheading">
      {body}
    </h3>
    <User {...user} />
    <CommentList list={comments} />
  </>
);

Post.propTypes = {
  user: PropTypes.shape(UserShape).isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
