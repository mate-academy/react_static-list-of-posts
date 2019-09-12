import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.scss';
const CommentList = ({comment}) => {
  return (
    <div className = 'comment-list'>
      { comment.map((comm)=> {

        return (
          <Comment key={ comm.id } comm = {comm}  />
        )
      })
      }
    </div>
  )
}
export default CommentList;
