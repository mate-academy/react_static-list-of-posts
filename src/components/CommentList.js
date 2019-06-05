import React from 'react';
import Comment from './Comment';
import {comments} from './comments';

function CommentList(props) {
  let commentsList = [];
  
  for (let comment of comments) {
    if (props.id === comment.postId) {
      const mailto = 'mailto:' + comment.email;
      commentsList.push(<Comment text = {comment.body}
                                 author = {comment.name}
                                 email = {comment.email}
                                 mailto = {mailto}/>
      );    
    }
  }

  return(
    <section>
      {commentsList}
    </section>
  )
}

export default CommentList;