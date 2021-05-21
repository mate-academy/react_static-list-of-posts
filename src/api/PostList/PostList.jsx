import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

const PostList = ({ posts }) => (
  posts.map(post => (
    <>
      <div className="post-title">
        {post.title}
      </div>
      <div>
        {post.body}
      </div>

      <div className="user">
        <User {...post.user} key={post.id} />
      </div>

      <div>
        <CommentList comments={post.comments} />
      </div>
    </>
  ))
);

CommentList.propTypes = {
  posts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostList;
