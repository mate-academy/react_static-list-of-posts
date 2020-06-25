import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';
import { Post } from './Post';

export const PostList = ({ preparedList }) => (
  <ul>
    {preparedList.map(x => (
      <li>
        <Post post={x.post} />
        <User user={x.user} />
        <CommentList commentList={x.commentList} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  preparedList: PropTypes.instanceOf(Array).isRequired,
};
