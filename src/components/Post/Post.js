import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User1';
import './Post.scss';
import { userType, postType } from '../typedefs';

export const Post = ({ title, body, user }) => (
  <>
    <User {...user} />
    <h2 className="postName">
      {title}
    </h2>
    <p className="postBody">{body}</p>
  </>
);

Post.propTypes = {
  title: postType.title.isRequired,
  body: postType.body.isRequired,
  user: PropTypes.shape(userType).isRequired,
};
