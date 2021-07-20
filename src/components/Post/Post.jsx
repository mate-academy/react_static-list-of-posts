import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User, TypeUser } from '../User';
import { CommentList, TypeCommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <p className="post__title">{title}</p>
    <p>
      <strong>
        Content:
        {` `}
      </strong>
      {body}
    </p>
    <strong>User:</strong>
    <User user={user} />
    <p>
      <strong>Comments:</strong>
    </p>
    <CommentList comments={comments} />
  </div>
);

export const TypePost = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  ...TypeUser,
  ...TypeCommentList,
};

Post.propTypes = TypePost;
