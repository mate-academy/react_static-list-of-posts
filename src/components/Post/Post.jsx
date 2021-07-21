import React from 'react';
import PropTypes from 'prop-types';
import { User, UserType } from '../User';
import { CommentList } from '../CommentList';
import { CommentType } from '../Comment';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="display-5">{`Post: ${title}`}</h2>
    <p className="lead">{`Text: ${body}`}</p>
    <User
      name={user.name}
      email={user.email}
      address={user.address}
    />
    <CommentList comments={comments} />
  </>

);

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType),
  ).isRequired,
};

Post.propTypes = PostType;
