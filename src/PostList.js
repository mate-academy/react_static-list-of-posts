import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import Post from './Post';
import CommentList from './CommentList';

const PostList = props => (
  <ul className="posts">
    {props.post.map(item => (
      <li className="posts__item">
        <User
          name={item.user.name}
          username={item.user.username}
        />
        <Post
          title={item.title}
          body={item.body}
        />
        <CommentList
          name={item.comment.name}
          body={item.comment.body}
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  post: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
