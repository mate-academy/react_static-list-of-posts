import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import User from '../user/User';
import CommentList from '../commentList/CommentList';

const Post = ({ post }) => (
  <div>
    <User user={post.user} key={post.user.id} />
    <Message>
      <Message.Header>{post.title}</Message.Header>
      <p>{post.body}</p>
    </Message>
    <CommentList comments={post.comments} key={post.comments.id} />
  </div>
);

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.object,
  }).isRequired,
};
