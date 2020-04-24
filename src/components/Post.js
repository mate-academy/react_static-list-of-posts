import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Comment from './Comment';
import './User.css';

const Post = ({ title, body, postUser, postComent }) => (
  <li className="post__item">
    <h2 className="post__title">
      {title}
    </h2>
    <ul className="post__user user">
      <User {...postUser} />
    </ul>
    <p className="post__text">
      {body}
    </p>
    <ul className="post__comment comment__list">
      {postComent.map(coment => (
        <Comment {...coment} key={coment.id} />
      ))}
    </ul>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postUser: PropTypes.shape({}).isRequired,
  postComent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
