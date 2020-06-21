import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../user/User';
import { Address } from '../address/Address';
import { Comments } from '../comments/Comments';

export const Post = ({ post }) => (
  <li className="posts-list__item">
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <User user={post.user} />
      <Address address={post.user.address} />
      <Comments comments={post.comments} />
    </div>
  </li>
);

Post.propTypes = {
  post: PropTypes.objectOf(Object).isRequired,
};
