import React from 'react';
import User from './User';
import CommentList from './CommentList'



function Post(props) {
  return (
    <section>
      <div className="item">
        <p className="item__title">{props.post.title}</p>
        <p className="item__text">{props.post.body}</p>
        <User key={props.post.author.id} authorData={props.post.author} />
      </div>
      <div className="comments">
        <p className="comments_title">Comments:</p>
        {props.post.commentData.map(item => (
          <CommentList key={item.id} cmnt={item} />)
        )}
      </div>
    </section>
  );
}

export default Post;
