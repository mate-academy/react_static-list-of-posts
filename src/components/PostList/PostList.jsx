import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { UserType } from '../../types';
import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const PostList = ({ fullPosts }) => (
  <ul className="post-list">
    {fullPosts.map(fullPost => (
      <li className="post-list__item" key={fullPost.id}>
        <Post
          title={fullPost.title}
          body={fullPost.body}
        />
        <User user={fullPost.user} />
        <h3 className="post-list__comment-title">Comments:</h3>
        <CommentList comments={fullPost.comments} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  fullPosts: PropTypes.arrayOf(
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
