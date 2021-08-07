import React from 'react';
import PropTypes from 'prop-types';

import { Comments } from './Comments';

import './Post.css';

import { TypeUser, TypeComment, TypePost } from '../types';

export const Post = ({ post, author, comments }) => {
  const { title, body } = post;
  // const currentComments = comments
  //   .filter(comment => comment.postId === post.id);

  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <div className="post-body">{body}</div>
      <div className="post-author">

        <span className="author-name">
          {author.name}
          {', '}
          {author.address.city}
        </span>
        <span className="author-email">{author.email}</span>
      </div>
      <Comments list={comments} />
    </div>
  );
};

Post.propTypes = {
  post: TypePost.isRequired,
  author: TypeUser.isRequired,
  comments: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
