import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import User from '../User/User';
import CommentsList from '../CommentsList/ComentsList';
import './PostList.css';

const PostList = ({ data }) => (
  <ul className="postList">
    {data.map(post => (
      <div key={post.id} className="postList__wrapper">
        <li className="postList__item">
          <User
            {...post.user}
          />
          <Post
            {...post}
          />
        </li>
        <CommentsList
          comments={post.comments}
        />
      </div>
    ))}
  </ul>
);

PostList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
