import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList'



const PostList = (props) => (
  <div className="postlist_list">
    {props.post.map(post =>(
      <div>
        <p><b>Post title: </b> {post.title} </p>
        <p><b>Post body: </b>{post.body} </p>
        <p><b>USER: </b><User userId = {post.userId}/></p>
        <p><b>Comments: </b><CommentList comments = {post.userComments}/></p>
     </div>
      )
    )}
  </div>
)

PostList.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired
};


export default PostList;


