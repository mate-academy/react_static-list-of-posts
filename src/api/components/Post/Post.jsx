import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { UserType, CommentType } from '../Types';

export const Post = ({ id, title, body, user, commentsArr }) => (
  <li>
    <h3>{title}</h3>
    <User curentUser={user} />
    <p>Text of post:</p>
    <p>
      {body}
    </p>
    <CommentList commentList={commentsArr} />
  </li>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserType.isRequired,
  commentsArr: PropTypes.arrayOf(CommentType).isRequired,
};
