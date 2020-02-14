import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

export const PostList = ({ postList }) => (
  <div className="post-list">
    {postList
      .map(({ id, author, title, body, postComments }) => (
        <Post
          key={id}
          idx={id}
          author={author.name}
          emailAuthor={author.email}
          address={author.address.city}
          title={title}
          text={body}
          commentsList={postComments}
        />
      ))}
  </div>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      users: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.shape({
          city: PropTypes.string,
        }),
      }),
      comments: PropTypes.shape({
        postId: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    }),
  ),
};

PostList.defaultProps = {
  postList: [],
};
