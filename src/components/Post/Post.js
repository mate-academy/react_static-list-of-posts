import React from 'react';
import './Post.css';

import PropTypes from 'prop-types';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ data }) => (
  <div className="Post">
    <User
      nick={data.userNick}
      name={data.userName}
      email={data.userEmail}
      city={data.userCity}
    />
    <div className="PostInfo">
      <div className="PostBody">
        <h2 className="PostTitle">{data.title}</h2>
        <p className="PostText">{data.text}</p>
      </div>
      <CommentList
        comments={data.comments}
      />
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      userNick: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      userEmail: PropTypes.string.isRequired,
      userCity: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
