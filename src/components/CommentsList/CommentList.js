import React from 'react';
import comments from '../../api/comments';
import Comment from "../Comment";

const commentsFilter = post => (
  comments.filter(comment => comment.postId === post.id)
);

const CommentList = ({post}) => {
  return (
    <div>
      <h3>Comments:</h3>
        {commentsFilter(post).map(
          singleComment => <Comment comment={singleComment} key={singleComment.id} />)
        }
    </div>

  )
};

export default CommentList;
