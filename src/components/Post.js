import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Comment from './Comment';
import "./Post.css";

const Post = ({ title, body, postUser, postComent }) => (
  <li className='post__item'>
    <h2>
      {title}
    </h2>
    <ul>
      <User {...postUser} />
    </ul>
    <p>
      {body}
    </p>
    <ul>
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
