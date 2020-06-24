import React from 'react';
import PropTypes from 'prop-types';
import { User, userShape } from '../User/User';
import { CommentList, commentListShape } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <User {...user} />
    <div className="post__body">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__text">
        {body}
      </p>
    </div>
    <CommentList {...comments} />
  </div>
);

export const postShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: { ...userShape },
  comments: { ...commentListShape },
});

Post.propTypes = { ...postShape };
