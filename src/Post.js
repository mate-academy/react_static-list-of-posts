import React from 'react';
import User from './User';
import Comment from './Comment'

function Post({ post }) {
  return (
    <section>
      <div className="item">
        <p className="item__title">{post.title}</p>
        <p className="item__text">{post.body}</p>
        <User authorData={post.author} />
      </div>
      <div className="comments">
        <p className="comments_title">Comments:</p>
        {post.commentsArray.map(item => (
          <Comment key={item.id} comment={item} />)
        )}
      </div>
    </section>
  );
}

export default Post;
