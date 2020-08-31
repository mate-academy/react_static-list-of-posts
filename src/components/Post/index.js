import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import './Post.css';
import CommentList from '../CommentList';

function Post({ post }) {
  const title = post.title[0].toUpperCase() + post.title.substring(1);

  return (
    <div className="post">
      <User user={post.user} />
      <h3>{title}</h3>
      <p>{post.body}</p>
      <div className="post__comments">
        <p>
          Comments:
          {post.comments.length}
        </p>
        <CommentList commentList={post.comments} />
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Post;
