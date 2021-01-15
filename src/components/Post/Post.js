import React from 'react';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import { typePost } from '../../types';

import './Post.scss';

const Post = ({ post }) => (
  <section className="post">
    <p className="post__author">
      Written by:
      {' '}
      <br />
      <User user={post.user} />
    </p>

    <div className="post__content">
      <h2>{`${post.title}`}</h2>

      <p>{`${post.body}`}</p>
    </div>

    <CommentList list={post.comments} />
  </section>
);

Post.propTypes = { post: typePost.isRequired };

export default Post;
