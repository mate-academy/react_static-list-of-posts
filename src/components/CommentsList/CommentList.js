import React from 'react';
import comments from '../../api/comments';
import Comment from "../Comment";


const CommentList = ({post}) => {
  const postComments = comments.filter(comment => comment.postId === post.id)

  return (
    <div>
      <h3>Comments:</h3>
        {postComments.map(
          comment => <Comment comment={comment} key={comment.id} />)
        }
    </div>

  )
};

export default CommentList;
