import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postOne }) => (
  <div className="post">
    <p>
      {'Post# - '}
      {postOne.id}
      {<br />}
      {'Topic - '}
      {postOne.title}
    </p>
    <p>{postOne.body}</p>
    <User userOne={postOne.user} />
    <CommentList commentOne={postOne.comments} />
  </div>
);

Post.propTypes = { postOne: PropTypes.objectOf(PropTypes.object).isRequired };

export default Post;
