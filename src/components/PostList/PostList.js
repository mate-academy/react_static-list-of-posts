import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.scss';
import { commentType, postType, usersType } from '../../types';

const PostList = ({ posts, commentList, users }) => (
  <section className="post-list">
    {posts.map(post => (
      <Post
        post={post}
        user={users.find(user => user.id === post.userId)}
        comment={commentList.filter(comment => (
          comment.postId === post.userId
        ))}
        key={post.id}
      />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postType).isRequired,

  users: PropTypes.arrayOf(usersType).isRequired,

  commentList: PropTypes.arrayOf(commentType).isRequired,
};

export default PostList;
