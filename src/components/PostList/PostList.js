import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

export const PostList = ({ posts, comments, users }) => {
  const postListComplicate = posts.map(post => ({
    ...post,
    postComments: comments.filter(comment => comment.postId === post.id),
    author: users.find(user => user.id === post.userId),
  }));

  return (
    <div className="post-list">
      { postListComplicate
        .map(({ postComments, id, title, body, author }) => (
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
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
      }),
    }),
  ),
};

PostList.defaultProps = {
  posts: [],
  comments: [],
  users: [],
};
