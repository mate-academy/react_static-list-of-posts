import React from 'react';
import PropTypes from 'prop-types';
import './PostItem.css';

import User from '../User/User';
import Comment from '../Comment/Comment';

const PostItem = props => (
  <section className="post">
    <h2 className="post__headline">{props.postItem.post.title}</h2>
    <article className="post__text">{props.postItem.post.body}</article>
    <User user={props.postItem.user} />
    <section className="comments">
      <h4>Comments:</h4>
      {
        props.postItem.comments.map(comment => <Comment comment={comment} />)
      }
    </section>
  </section>
);

export default PostItem;
