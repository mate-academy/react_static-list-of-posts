import React from 'react';
import PropTypes from 'prop-types';

import { PostPropTypes } from './propTypes/PostPropTypes';
import { User } from './User';
import { CommentList } from './CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <div className="Post__heading">
      <span className="Post__author">
        <User {...user} />
      </span>
      <h3 className="Post__title">
        {title}
      </h3>
    </div>
    <p className="Post__text">
      {body}
    </p>
    <div className="Post__comments_heading">
      Comments:
    </div>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PropTypes.shape(PostPropTypes).isRequired;
