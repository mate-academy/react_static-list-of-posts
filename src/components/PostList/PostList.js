import React from 'react';
import propTypes from 'prop-types';

import Post from '../Post/Post';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

import './PostList.css';

const PostList = ({ posts, users, comments }) => (

  <div>
    {posts.map((post) => {
      const userData = users.find(user => user.id === post.userId);
      const commentInfo = comments.filter(
        comment => comment.postId === post.id
      );

      return (
        <div className="post-info">
          <Post post={post} key={post.id} />
          <User user={userData} key={userData.id} />

          <CommentList comment={commentInfo} />

        </div>
      );
    })}

  </div>

);

export default PostList;

PostList.propTypes = {
  posts: propTypes.arrayOf(propTypes.shape({
    post: propTypes.arrayOf(propTypes.string),
  })),
  users: propTypes.arrayOf(propTypes.shape({
    user: propTypes.arrayOf(propTypes.string),
  })),
  comments: propTypes.arrayOf(propTypes.shape({
    comment: propTypes.arrayOf(propTypes.string),
  })),
};
