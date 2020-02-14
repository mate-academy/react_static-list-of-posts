import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const Postlist = ({ postlist }) => (
  <div className="postlist">
    {postlist.map(postItem => (
      <Post key={postItem.id} post={postItem} />
    ))}
  </div>
);

Postlist.propTypes = {
  postlist: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
