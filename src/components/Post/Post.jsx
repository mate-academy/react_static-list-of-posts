import React from 'react';
import './post.scss';
import PropTypes from 'prop-types';

import users from '../../api/users';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import comments from '../../api/comments';

function Post({ userId, id, title, body }) {
  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__content">{body}</p>
      <User {...users.find(user => user.id === userId)} />
      <CommentList list={comments.filter(comment => comment.postId === id)} />
    </>
  );
}

Post.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
