import React from 'react';
import PropTypes from 'prop-types';
import { UserType, CommentType } from '../Types';
import { Post } from '../Post';

export const PostList = ({ postsList }) => (
  <ul>
    {postsList.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: UserType.isRequired,
    commentsArr: PropTypes.arrayOf(CommentType).isRequired,
  })).isRequired,
};
