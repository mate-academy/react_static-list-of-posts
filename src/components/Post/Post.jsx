import React from 'react';
import './post.scss';
import PropTypes from 'prop-types';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

function Post({ author, postComments, title, body }) {
  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__content">{body}</p>
      <User
        name={author.name}
        email={author.email}
        address={author.address}
      />
      <CommentList list={postComments} />
    </>
  );
}

Post.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  postComments: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
