import React from 'react';
import Comments from "./Comments";

function DropDown({ post }) {
  return (
    <div className="dropDown">
      {post.comment.map( comment =>
        ( <Comments comment={comment} key={comment.id} />))}
    </div>
  );
}

export default DropDown;
