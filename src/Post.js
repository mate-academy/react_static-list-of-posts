import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import User from './User';

const Post = ({ post }) => (
  <div className="block">
    <ul>
      <li>
        <p className="description">Title</p>
        <p>{post.title}</p>
      </li>
      <li>
        <p className="description">Text</p>
        <p>{post.body}</p>
      </li>
      <User userData={post} />
      <li>
        <p className="description">Comments</p>
        <ul>
          <CommentList comments={post.comments} />
        </ul>
      </li>
    </ul>
  </div>
);

Post.propTypes = {
  post: PropTypes.oneOfType([PropTypes.string,
    PropTypes.number,
  ])
    .isRequired,
};

export default Post;
