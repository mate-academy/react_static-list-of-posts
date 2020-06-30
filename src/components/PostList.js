import React from 'react';
import PropTypes from 'prop-types';
import { User, UserShape } from './User';
import { CommentList, CommentListShape } from './CommentList';
import { Post, PostShape } from './Post';

export const PostList = ({ preparedList }) => (
  <ul>
    {preparedList.map(entry => (
      <li>
        <Post post={entry.post} />
        <User user={entry.user} />
        <CommentList commentList={entry.commentList} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  preparedList: PropTypes.arrayOf(PropTypes.shape({
    post: PostShape.isRequired,
    user: UserShape.isRequired,
    commentList: CommentListShape.isRequired,
  })).isRequired,
};
