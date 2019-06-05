import React from 'react';
import Comment from './Comment';
import {comments} from '../comments';
import './CommentList.css'

function CommentList(props) {
  return comments.map(commentItem => {
    if(commentItem.postId === props.id) {
      return <Comment comment={commentItem} key={commentItem.name}/>
    }
  })
}

export default CommentList;
