import React from 'react';
import Comment from "./Comment";
import {comments} from "./comments";

function CommentList(props) {

  return (
    <div className='comments'>
      {comments.map(comment => comment.postId === props.id ? (
        <Comment
          name={comment.name}
          email={comment.email}
          text={comment.body}
          key={comment.id}
        />
        ): null
      )}
    </div>
  );
}

export default CommentList;