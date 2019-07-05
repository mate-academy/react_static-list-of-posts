import React from 'react';
import User from './User';
import CommentList from './CommentList';

function Post(props) {
  // eslint-disable-next-line react/prop-types
  const { posts } = props;
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {posts.map(item => (
        <div className="post">
          <h2 className="post_title">{item.title}</h2>
          <p className="post_text">{item.body}</p>
          <User user={item.user} />
          <h4>Comments</h4>
          <CommentList comments={item.comments} />
        </div>
      ))}
    </>
  );
}

export default Post;
