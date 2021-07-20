import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { User } from '../User/User';
import { CommentsList } from '../CommentList/ComentsList';
import './Post.scss';

export const Post = ({ post }) => (
  <>
    <div className="post__wrap">
      <User user={post.author} />
      <h2 className="post__title">{`Headline:${post.title}`}</h2>
      <div className="post__content">{post.body}</div>
      <CommentsList comments={post.comments} />
    </div>
  </>
);

Post.propTypes = {
  post: shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
