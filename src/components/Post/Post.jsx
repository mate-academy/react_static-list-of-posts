import React from 'react';
import propTypes from 'prop-types';
import{ User }  from '../User/User';
import { CommentList } from '../CommentList/CommentList';

function Post({title, body, user, comments}) {
  return (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
    <User {...user}/>
    <CommentList comments={comments}/>
  </div>
  )
}

Post.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
}

export default Post;
