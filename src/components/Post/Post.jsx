import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { commentPropTypes, userPropTypes } from '../../types';

export const Post = ({ post }) => (
  <>
    <p className="card border-secondary mb-3">
      {`title : ${post.title}`}
      <p>{`comment : ${post.body}`}</p>
      <p><User user={post.user}/></p>
    </p>
    <p className="card border-secondary mb-3">
      <CommentList comments={post.comments}/>
    </p>
  </>
);
Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(userPropTypes).isRequired,
  comments: PropTypes.arrayOf(commentPropTypes).isRequired,
};
