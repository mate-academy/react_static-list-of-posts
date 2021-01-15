import React from 'react';

import { CommentList } from './CommentList';
import { User } from './User';
import PropTypes from 'prop-types';

import { TypeComments } from '../types';
import { TypeUser } from '../types'

export const Post = ({ user, comments, body, title}) => {
  return (
  <>  
  <li className="list__item">
    <h1 className="list__title">{title}</h1>
    <p className="list__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </li>
    
  </>
);
}

Post.propTypes = {
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
