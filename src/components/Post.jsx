import React from 'react'
import PropTypes from 'prop-types';

import User from './User'
import CommentList from './CommentList'

const Post = ({currentPost}) => (
  <article className='article'>
    <h2 className='article__title'>{currentPost.title}</h2>
    <section className="article__body">{currentPost.body}</section><br />
    <User user={currentPost.user}/> <br />
    <div>Comments:</div>
    <CommentList currentComments={currentPost.comments}/>
  </article>
)

Post.propTypes = {
  currentPost: PropTypes.object.isRequired,
};

export default Post