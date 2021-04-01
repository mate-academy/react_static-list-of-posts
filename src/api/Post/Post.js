import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import { CommentList } from '../CommentList';
import users from '../users';

export const Post = ({ post }) => {
  const { title, body, userId, id } = post;
  const user = users.find(u => u.id === userId);

  const preparedPost = {
    user,
    comments: CommentList(id),
    content: {
      title, body,
    },
  };

  return (
    <>
      <div className="postFrame">
        <header className="title">
          {title}
        </header>
        <div className="body">
          <text>
            {body}
          </text>
        </div>
        <div>
          <text>{`Name: ${preparedPost.user.name}`}</text>
          <br />
          <text className="userInfo">
            Address:
            {`${preparedPost.user.address.city}, ${
              preparedPost.user.address.street}`}
          </text>
          <br />
          <footer className="userInfo">
            {preparedPost.user.email}
          </footer>
        </div>
      </div>

      <div className="commentsArea">
        <CommentList postId={id} />
      </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
