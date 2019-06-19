import React from 'react';
import {comments} from "../comments";
import Comment from "./Comment";

function CommentList(props) {
  const postComments = comments.filter(comment => comment.postId === props.id);
  const listOfComments = postComments.map(element => {
    return (
      <Comment key={element.id} email={element.email} body={element.body} name={element.name}/>
    );
  });
  return (
    <div>
      {listOfComments}
    </div>
  );
}

export default CommentList;
