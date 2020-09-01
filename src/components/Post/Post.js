import React from 'react';
import './Post.css';

import PropTypes from 'prop-types';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ data }) => (
  <div className="Post">
    <User
      {...data.user}
    />
    <div className="PostInfo">
      <div className="PostBody">
        <h2 className="PostTitle">{data.post.title}</h2>
        <p className="PostText">{data.post.text}</p>
      </div>
      <CommentList
        comments={data.comments}
      />
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape(),
  ).isRequired,
};
