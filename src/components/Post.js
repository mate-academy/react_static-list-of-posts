import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ item }) => (
  <span>
    <h3><b>The title of the post: </b>{item.title}</h3>
    <b>The text of the post: </b>{item.body}
    <User item={item.user} />
    <CommentList items={item.comments} />
  </span>
);

Post.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Post;
