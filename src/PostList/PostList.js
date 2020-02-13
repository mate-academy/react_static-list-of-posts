import React from 'react';
import Post from '../Post/Post';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

import './PostList.css';

const PostList = ({ posts }) => {
  const posted = posts.map((post) => {
    const { title,
      body,
      user,
      comments,
      id } = post;

    return (
      <ul className="card" key={id}>
        <Post title={title} body={body} />
        <User
          name={user.name}
          email={user.email}
          address={user.address}
        />
        <hr />
        <p className="paragraph">Comments</p>
        <CommentList comments={comments} />
      </ul>
    );
  });

  return posted;
};

export default PostList;
