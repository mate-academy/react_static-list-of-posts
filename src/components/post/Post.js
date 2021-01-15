import React from 'react';
import CommentList from '../comments_list/Commentslist';
import User from '../user/User';
import { typePost } from '../../types';

const Post = ({ post }) => (
  <>
    <li className="post">
      <h3 className="post__title">{post.title}</h3>
      <p className="post__text">{post.body}</p>
      <User post={post} />
      <CommentList comments={post.comments} />
    </li>
  </>
);

Post.propTypes = typePost;

export default Post;
