import React from 'react';
import User from './User';
import CommentList from './CommentList';

export default function Post(props) {
  const { title, body, userInfo, comments } = props.postInfo;
    return (
      <div className="post">
        <p>{title}</p>
        <p>{body}</p>
        <User info={userInfo}/>
        <CommentList commentsList={comments}/>
      </div>
  );
}
