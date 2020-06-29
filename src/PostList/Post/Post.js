import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';
import { User } from './User/User';
import { CommentList } from './CommentList/CommentList';
import { postShape, userShape, commentsShape } from './props';

export const Post = ({ title, body, user, comment }) => {
  const postTitle = (title)[0].toUpperCase() + (title).slice(1);
  const postMessage = (body)[0].toUpperCase() + (body).slice(1);

  return (
    <>
      <h3 className="post__title">{postTitle}</h3>
      <p>{postMessage}</p>
      <User {...user} />
      <CommentList props={comment} />
    </>
  );
};

Post.propTypes = postShape.isRequired;
Post.propTypes = {
  user: userShape.isRequired,
  comment: PropTypes.arrayOf(commentsShape).isRequired,
};
