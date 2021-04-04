import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

import { User, userType } from '../User';
import { commentType } from '../Comment';
import { CommentList } from '../CommentList';

export const Post = ({ author, title, body, comments }) => (
  <>
    <div className="Post">
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <User {...author} />
      </div>
    </div>
    <CommentList comments={comments} />
  </>
);

export const postType = {
  author: userType.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(commentType).isRequired,
};

Post.propTypes = postType;
