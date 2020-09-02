import React from 'react';
import PropTypes from 'prop-types';
import '../post/post.css';
import CommentList from '../commentList/commentList'

function Post({title, user, body, comments}) {
  return (
    <>
      <div className="post__info-user">
        <p className="post__name">
          {user.name}
        </p>
        <span className="post__email">
          <a href="#">{user.email}</a>
        </span>
      </div>
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

