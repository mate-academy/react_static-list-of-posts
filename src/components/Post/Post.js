import React from 'react';
// import PropTypes from 'prop-types';

import './Post.scss';
import { PostType } from '../types/types';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ author, title, body, comments }) => (
  <>
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <p>{body}</p>
    </div>
    <User {...author} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostType;
