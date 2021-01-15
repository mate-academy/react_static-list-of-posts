import React from 'react';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import { typePost } from '../../types';

import './Post.scss';

const Post = ({ user, title, body, comments }) => (
  <section className="post">
    <p className="post__author">
      Written by:
      {' '}
      <br />
      <User user={user} />
    </p>

    <div className="post__content">
      <h2>{`${title}`}</h2>

      <p>{`${body}`}</p>
    </div>

    <CommentList comments={comments} />
  </section>
);

Post.propTypes = typePost.isRequired;

export default Post;
