import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { PostType } from '../../types';

export const Post = ({ post }) => (
  <ul className="list-group list-group-flush">
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      <h1 className="title">
        {post.title}
      </h1>
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      {post.body}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      <User {...post} />
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-success
      "
    >
      <CommentList {...post} />
    </li>
  </ul>
);
Post.propTypes = {
  post: PostType.isRequired,
};
