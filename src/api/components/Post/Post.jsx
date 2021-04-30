import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { UserType, CommentType } from '../Types';

export const Post = ({ title, body, user, commentsArr }) => (
  <>
    <h3>{title}</h3>
    <div>
      <User curentUser={user} />
    </div>
    <p>Text of post:</p>
    <p>
      {body}
    </p>
    <CommentList commentList={commentsArr} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserType.isRequired,
  commentsArr: PropTypes.arrayOf(CommentType).isRequired,
};
