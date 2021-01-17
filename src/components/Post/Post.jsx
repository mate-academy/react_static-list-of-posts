import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import './Post.scss';
import { PostType, UserType } from '../Types';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="post__border">
      <b>
        {`Title: `}
      </b>
      {title}
      <p>
        {body}
      </p>
      <User {...user} />
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  user: UserType.isRequired,
  comments: PropTypes.arrayOf(PostType).isRequired,
};
