import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ title, body, user, comments }) => (
  <>
    <h3>
      {title}
    </h3>
    <p className="text">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

export default Post;
