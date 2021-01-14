import React from 'react';
import { TypePost } from '../../types';
import comments from '../../api/comments';
import users from '../../api/users';
import { CommentList } from '../CommentList';
import { User } from '../User';

import './Post.scss';

export const Post = (props) => {
  const userLink = users.find(user => user.id === props.userId);
  const commentsList = comments.filter(comment => (
    comment.postId === props.id
  ));

  return (
    <article className="Post">
      <h2 className="Post__header">{props.title}</h2>
      <p className="Post__text">{props.body}</p>
      <User {...userLink} />
      <CommentList commentsList={commentsList} />
    </article>
  );
};

Post.propTypes = TypePost.isRequired;
