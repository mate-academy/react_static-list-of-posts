import React from 'react';
import CommentList from "../CommentList/CommentList";
import User from "../User/User";


function Post({ title, body, user, comments}) {
  return (
    <>
      <h2>
        {title}
      </h2>

      <User {...user}/>

      <p>
        {body}
      </p>

      <CommentList comments={comments}/>
    </>
  )
}

export default Post;
