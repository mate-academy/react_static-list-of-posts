import React from 'react';
import PropTypes from 'prop-types';
import { CommentTypes } from '../../default';
import { Post } from '../Post';
import { CommentList } from '../CommentList';
import { User } from '../User/index';
import './PostList.scss';

export function PostList({ post }) {
  return (
    <ul className="post__list">
      {post.map(item => (
        <li
          key={item.id}
          className="post__item"
        >
          <Post
            title={item.title}
            body={item.body}
          />
          <User user={item.user} />
          <CommentList comment={item.comment} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,

    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
    comment: CommentTypes,
  }),
).isRequired;
