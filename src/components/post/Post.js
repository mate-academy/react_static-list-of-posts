import React from 'react';
import Comment from '../comment/Comment'

function Post(props) {
  return (
    <div className="post">
      <>
        <div className="authorName"><strong>{props.name}</strong></div>
        <div className="photo"><img src="https://source.unsplash.com/collection/190727/444x400
        /?food,game,car,nature,animal" className="main-image" alt='post' /></div>
        <div className="title"><strong>{props.title}</strong></div>
        <div className="bodyText">{props.body}</div>
        <div className="commentsVisible"><strong>Watch comments ({props.comments.length})</strong></div>
        <div class="comments-main-div" hidden>{props.comments.map(comment => <Comment name={comment.name} body={comment.body} />)}
        </div>
      </>
    </div>
  )
}




export default Post;
