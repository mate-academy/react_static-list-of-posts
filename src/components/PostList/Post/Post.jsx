import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';
import './Post.scss';

export const Post = ({ title, body, userId, id, users, comments }) => {
  const user = users.find(person => person.id === userId);
  const commentsByPost = comments.filter(comment => comment.postId === id);

  return (
    <>
      <h2 className="post__title">{title}</h2>
      <p className="post__content">{body}</p>
      <div className="user">
        <User {...user} />
      </div>
      <CommentList comments={commentsByPost} />
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
