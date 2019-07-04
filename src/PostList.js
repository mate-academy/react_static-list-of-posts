import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const PostList = props => (
  props.post.map(item => (
    <div>
      <h1 className="App__post_title">{item.title}</h1>
      <p className="App__post_body">{item.body}</p>
      <p className="App__post_userId"><User userId={item.userId} /></p>
      <p className="App__post_comment">
        <CommentList comments={item.userComments} />
      </p>
    </div>
  ))

);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      body: PropTypes.string,
      userId: PropTypes.string,
      userComments: PropTypes.string,
    })
  ).isRequired,
};

export default PostList;
