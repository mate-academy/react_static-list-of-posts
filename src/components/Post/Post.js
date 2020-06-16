import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Post.css';
import { CommentList } from '../CommentList/CommentList';

const setFirstChar = string => (
  string.replace(/^(\w)/, match => match.toUpperCase())
);

const Post = props => (
  <li className="posts__item post">
    <User {...props.user} />
    <div className="post__message">
      <h3>{setFirstChar(props.title)}</h3>
      <p>{setFirstChar(props.body)}</p>
    </div>
    <CommentList comments={props.comments} />
  </li>
);

export { Post };

Post.defaultProps = {
  title: 'No title.',
  comments: [],
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};
