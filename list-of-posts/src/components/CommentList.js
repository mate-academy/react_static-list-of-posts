import React from 'react';
import {comments} from "../comments";
import Comment from "./Comment";

function CommentList(props) {
    let postComments = comments.filter(com => {
        return com.postId === props.id;
    });
    let listOfComments = postComments.map(e => {
        return (
<Comment key={e.id}  email={e.email} body={e.body} name={e.name}/>
        );
    });
return (
<div>
    {listOfComments}
</div>
);
}

export default CommentList;
