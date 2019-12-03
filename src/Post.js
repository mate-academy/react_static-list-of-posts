import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post: { id, user, title, body, commentList } }) => (
  <div className="post">
    <dt className="title">
      {`Post ${id}: ${title}`}
    </dt>
    <dd className="description">
      <span className="post-body">
        { `"${body}"`}
      </span>
      <br />
      <span className="user-info">
        <User userObj={user} />
      </span>
      <CommentList commentList={commentList} />
    </dd>
  </div>
);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
