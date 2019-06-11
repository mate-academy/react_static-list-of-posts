import React from 'react';
import {comments} from '../comments';
import Comment from './Comment';

function CommentsList(props) {
  return (
    comments.map((item) => {
      if (item.postId === props.id) {
      return  <Comment comment={item} key={item.name}/>
      }
    })
  );
}

export default CommentsList;
