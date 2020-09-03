import React from 'react';
import PropTypes from 'prop-types';
import '../post/post.css';
import CommentList from '../commentList/commentList'
import User from '../User/User';

function Post({title, user, body, comments}) {
  return (
    <>
      <User {...user}/>
      <h1 className="post__title">{title}</h1>
      <div className="post__content">
        <p className="post__text">
          {body}
        </p>
      </div>
      <CommentList comments={comments}/>
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Post;

