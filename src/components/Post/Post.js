import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { Comment } from '../Comment/Comment';
import './Post.scss';

export function Post({ title, body, user, comments }) {
  return (
    <div className="border_style_groove">
      <div className="border_style_solid">
        <h3 align="center">{title}</h3>
        <p className="post-text">{body}</p>
        <User key={user.id} {...user} />
      </div>
      <CommentList comments={comments} />
    </div>
  );
}

Post.propTypes = {
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(User.propTypes).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)).isRequired,
};
