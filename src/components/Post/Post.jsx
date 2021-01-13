import React from 'react';
import User from '../User';
import CommentList from '../CommentList';
import PostShape from '../../Types';

// eslint-disable-next-line max-len
const Post = ({ postId, postTitle, postBody, idUser, dataUsers, commentsData }) => (
  <>
    <h1>{postTitle}</h1>
    <span><User users={dataUsers} id={idUser} /></span>
    <p>{postBody}</p>
    <p><CommentList comments={commentsData} postId={postId} /></p>
  </>
);

Post.propTypes = PostShape.isRequired;

export default Post;
