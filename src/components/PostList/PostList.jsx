import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import Post from '../Post';
import { PostShape, CommentShape, UserShape } from '../../Types';

const PostList = ({ postsData, usersData, commentsData }) => (
  <div className="postStyle">
    {postsData.map(post => (
      <div key={post.id}>
        <Post
          postTitle={post.title}
          postId={post.id}
          postBody={post.body}
          idUser={post.userId}
          dataUsers={usersData}
          commentsData={commentsData}
        />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  postsData: PropTypes.objectOf(PostShape).isRequired,
  usersData: PropTypes.objectOf(UserShape).isRequired,
  commentsData: PropTypes.objectOf(CommentShape).isRequired,
};

export default PostList;
