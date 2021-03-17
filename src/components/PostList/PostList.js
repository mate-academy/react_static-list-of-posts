import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { UserType } from '../../types';
import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const PostList = ({ posts }) => (
  <ul className="post__list list">
    {posts.map(post => (
      <li className="list__item" key={post.id}>
        <Post
          title={post.title}
          body={post.body}
        />
        <User user={post.user} />
        <h3 className="comment__title">Comments:</h3>
        <CommentList comments={post.comments} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        body: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        user: UserType,
      },
    ),
  ).isRequired,
};
