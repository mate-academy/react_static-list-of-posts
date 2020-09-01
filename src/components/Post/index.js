import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import { userShape } from '../User/userShape';
import './Post.css';
import CommentList from '../CommentList';

function Post({ title, user, comments, body }) {
  const titlePost = title[0].toUpperCase() + title.substring(1);

  return (
    <div className="post">
      <User {...user} />
      <h3>{titlePost}</h3>
      <p>{body}</p>
      <div className="post__comments">
        <p>
          Comments:
          {comments.length}
        </p>
        <CommentList commentList={comments} />
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userShape.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
