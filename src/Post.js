import React from 'react';
import User from './User';
import Comment from './Comment'

function Post(props) {
  return (
    <section>
      <div className="item">
        <p className="item__title">{props.post.title}</p>
        <p className="item__text">{props.post.body}</p>
        <User authorData={props.post.author} />
      </div>
      <div className="comments">
        <p className="comments_title">Comments:</p>
        {props.post.commentData.map(item => (
          <Comment key={item.id} cmnt={item} />)
        )}
      </div>
    </section>
  );
}

export default Post;
