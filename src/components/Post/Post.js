import React from 'react';
import propTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import posts from '../../api/posts';
import comments from '../../api/comments';

const PostWithComments = comments.map(comment => ({
  ...comment,
  commentsList: posts.find(post => post.userId === comment.postId),
}));

const Post = props => (
  <li>
    <h3>{props.post.title}</h3>
    <p>{props.post.body}</p>
    <User user={props.post.user} />

    <CommentList comment={PostWithComments} />
  </li>
);
Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string,
    body: propTypes.string,
    user: propTypes.shape({}),
  }).isRequired,
};

export default Post;
