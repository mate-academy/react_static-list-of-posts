import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import User from '../User/User';
import CommentsList from '../CommentsList/ComentsList';
import './PostList.css';

const PostList = ({ data }) => (
  <>
    <ul className="postList">
      {data.map(post => (
        <div key={post.id} className="postList__wrapper">
          <li className="postList__item">
            <User
              name={post.user.name}
              username={post.user.username}
              email={post.user.email}
              street={post.user.address.street}
              suite={post.user.address.suite}
              city={post.user.address.city}
              zipcode={post.user.address.zipcode}
              className="postList__user"
            />
            <Post
              body={post.body}
              title={post.title}
              className="postList__post"
            />
          </li>
          <CommentsList
            comments={post.comments}
            className="postList__comments"
          />
        </div>
      ))}
    </ul>
  </>
);

PostList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
