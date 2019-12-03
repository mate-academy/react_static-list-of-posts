import React from 'react';
import users from '../../api/users';
import CommentList from '../CommentsList';
import User from "../User";

const Post = ({post}) => {
  const postUser = users.find(user => user.id === post.userId);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <User
          email={postUser.email}
          name={postUser.name}
          address={postUser.address}
        />
      </p>
      <CommentList post={post}/>
      <hr />
    </div>
  )
};

export default Post;
