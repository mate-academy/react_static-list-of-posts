import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { typesPostList } from '../../types';

export function Post({ postElement }) {
  const {
    title,
    body,
    user,
    comments,
  } = { ...postElement };

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <User user={user} />
      <CommentList comments={comments} />
      <hr />
    </>
  );
}

Post.propTypes = {
  postElement: PropTypes.arrayOf(typesPostList).isRequired,
};
