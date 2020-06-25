import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentsList from '../CommentsList/CommentsList';
import './PostItem.css';

const PostItem = props => (
  <li className="post__item">
    <div className="post__top">
      <User {...props.user} />
      <div className="post__titles">
        <h4>{props.title}</h4>
        <p>{props.body}</p>
      </div>
    </div>
    <CommentsList comments={props.comments} />
  </li>
);

PostItem.defaultProps = {
  title: '',
  comments: [],
};

PostItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default PostItem;
