import React from 'react';
import User from './User';
import '../css/Post.css';
import CommentList from './CommentList';

function Post(props) {
  return(
    <section className = "post_wrapper">
      <h2>{props.title}</h2>
      <p>{String.fromCharCode(10003)}{String.fromCharCode(160)}{props.text}</p>
      <User author = {props.author} 
            email = {props.email} 
            mailto = {props.mailto}
            street = {props.street}
            suite = {props.suite}
            city = {props.city}
            zipcode = {props.zipcode}
            lat = {props.lat}
            lng = {props.lng}/>
        <section class="comments">
          <h2>Comments:</h2>
          <CommentList id = {props.id} author = {props.author} commentAuthor = {props.commentAuthor} emailObj = {props.emailObj}/>
        </section>
      </section>
  )
}

export default Post;
