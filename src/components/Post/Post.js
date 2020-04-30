import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentsList from '../CommentsList/CommentsList';
import './Post.css';

function Post({ id, title, body, user, comments }) {
  return (
    <div key={id} className="post__element">

      <div className="post__item">
        <h3 className="post__title">
          {title}
        </h3>
        <p className="post__body">
          {body}
        </p>
      </div>

      <User
        name={user.name}
        email={user.email}
        address={user.address}
      />

      <CommentsList comments={comments} />

    </div>
  );
}

export default Post;

Post.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  comments: PropTypes.shape({}).isRequired,
}).isRequired;
