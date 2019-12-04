import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => {
  const { id, title, body, user, comment } = post;

  return (

    <div className="post">
      <h1>
ID:
        {id}
      </h1>
      <h3>
TITLE:
        {title}
      </h3>
      <h4>
POST:
        {body}
      </h4>
      <User user={user} />
      <CommentList comment={comment} />
    </div>

  );
};

Post.propTypes = { post: PropTypes.objectOf(PropTypes) };
Post.defaultProps = {
  post: {
    id: 'no id',
    email: 'no email',
    body: 'no content',
    title: 'no title',
    user: 'no user',
    comment: 'no comment',
  },
};

export default Post;
