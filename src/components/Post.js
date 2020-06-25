
import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { User } from './User';

const Post = ({ post }) => (
  <div className="wrapper">
    <ul>
      <li>
        <p className="wrapper__caption">Title</p>
        <p>{post.title}</p>
      </li>
      <li>
        <p className="wrapper__caption">Text</p>
        <p>{post.body}</p>
      </li>
      <User userData={post} />
      <li>
        <p className="wrapper__caption">Comments</p>
        <ul>
          <CommentList comments={post.comments} />
        </ul>
      </li>
    </ul>
  </div>
);

Post.propTypes = {
  post: PropTypes.oneOfType(
    [PropTypes.string,
      PropTypes.number,
    ],
  ).isRequired,
};

export default Post;
