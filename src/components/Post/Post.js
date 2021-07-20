import React from 'react';
import PropTypes from 'prop-types';
import { User, TypeUser } from '../User';
import { CommentList, TypeCommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <p className="post__title">{title}</p>
    <p>
      <b>
        Content
        {': '}
      </b>
      {body}
    </p>
    <b>User:</b>
    <User user={user} />
    <p><b>Comments:</b></p>
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
