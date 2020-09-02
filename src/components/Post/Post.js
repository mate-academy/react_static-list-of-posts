import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';
import './Post.scss';

const Post = ({ id, title, body, user, comments }) => (
  <article
    key={id}
    className="post"
  >
    <div className="postBody">
      <h3>{title}</h3>
      <p>{body}</p>
      <User user={user} />
    </div>
    <span>Comments:</span>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  comments: PropTypes.arrayOf().isRequired,
};

export default Post;
