import React from 'react';
import PropTypes from 'prop-types';
import { User, userType } from '../User1';
import './Post.scss';

export const Post = ({ title, body, user }) => (
  <>
    <User {...user} />
    <h2 className="postName">
      {title}
    </h2>
    <p className="postBody">{body}</p>
  </>
);

export const postType = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
  userId: PropTypes.number,
};

Post.propTypes = {
  title: postType.title.isRequired,
  body: postType.body.isRequired,
  user: PropTypes.shape(userType).isRequired,
};
