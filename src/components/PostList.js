import React from 'react';
import Post from './Posts';
import CommentsList from './Commets';
import User from './Users';

const CreatePosts = props => (
  props.info.map(item => (
    <section className="posts-block">
      <Post postTitle={item.title} postBody={item.body} />
      <User postAuthor={item.user} />
      <CommentsList postComments={item.comments} />
    </section>
  ))
);

export default CreatePosts;
