import React from 'react';
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
    <User user={props.post.user}/>

    <CommentList comment={PostWithComments}/>
  </li>
);

export default Post;
