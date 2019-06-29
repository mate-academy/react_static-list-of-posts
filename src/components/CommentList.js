import React from "react";
import '../App.css';
import Comment from './Comment'

function CommentList(props) {
  return (
    <div className="comment-list">
      <button className="comment-btn">
        {props.numberComments} comments
      </button>
      <div>
        {props.comments.map(comment => (
          <Comment
            comment={comment}
            key={comment.id}
          />
        ))}
      </div>

    </div>
  )
}

export default CommentList;