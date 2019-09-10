import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

const Post = ({ post }) => {
  const {
    title, body, comments, user,
  } = post;
  const upperTitle = `${title.slice(0, 1).toUpperCase()}${title.slice(1)}`;

  return (
    <div className="post">
      <h2 className="post__title">{upperTitle}</h2>
      <p className="post__body">{body}</p>
      <User user={user} />
      <p className="post__comments">Comments:</p>
      <CommentList comments={comments} />
      <hr />
    </div>
  );
};

const postProps = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
}).isRequired;

Post.propTypes = {
  post: postProps.isRequired,
};

export default Post;
