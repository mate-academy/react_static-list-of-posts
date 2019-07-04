import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';

const Post = (props) => (
  <span>
    <h3><b>The title of the post: </b>{props.item.title}</h3>
    <b>The text of the post: </b>{props.item.body}
    <User item={props.item.user} />
    <CommentList items={props.item.comments} />
  </span>
);

Post.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Post;
