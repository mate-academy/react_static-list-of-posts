import React from 'react';
import CommentsList from '../CommentsList/CommensList';
import User from '../User/User';
import { postType } from '../types';
import './Post.scss';

const Post = ({ title, body, user, comments, index, id }) => (
  <li
    className="post"
  >
    <span className="post__title">
      {`Title: ${title}`}
    </span>

    <p className="post__content">
      {body}
    </p>

    <br />
    <User user={user} />
    <br />

    <span className="post__comments-title">
      Comments:
    </span>
    {`[${comments.length} comments]`}
    <CommentsList comments={comments} />
  </li>
);

Post.propTypes = postType.isRequired;

export default Post;
