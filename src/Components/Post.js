import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postData }) => {
  const { id, title, body, user, comments } = postData;

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
      <User userData={user} />
      <CommentList comments={comments} />
    </div>

  );
};

Post.propTypes = { postData: PropTypes.objectOf(PropTypes) };
Post.defaultProps = {
  postData: {
    id: 'no id',
    email: 'no email',
    body: 'no content',
    title: 'no title',
    user: 'no user',
    comment: 'no comment',
  },
};

export default Post;
