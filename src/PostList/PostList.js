import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

import './PostList.css';

const PostList = ({ posts }) => {
  const postedList = posts.map((post) => {
    const { title, body, user, comments, id } = post;

    return (
      <ul className="card" key={id}>
        <Post title={title} body={body} />
        <User
          name={user.name}
          email={user.email}
          address={user.address}
        />
        <hr />
        <p className="card__comments">Comments</p>
        <CommentList comments={comments} />
      </ul>
    );
  });

  return postedList;
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
