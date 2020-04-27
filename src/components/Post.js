import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import User from './User';

const Post = ({ item }) => (
  <div className="post">
    <h2 className="post__title">{item.title}</h2>

    <p className="post__text">
      {item.body}
    </p>

    <User info={item} />
    <CommentList item={item} />
  </div>
);

Post.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
