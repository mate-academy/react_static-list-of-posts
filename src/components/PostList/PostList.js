import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

import { PostShape, UserShape, CommentShape } from '../shapes';

const PostList = ({ postList, users, commentList }) => (
  <section>
    {postList.map(post => (
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
  postList: PropTypes.arrayOf(PostShape.isRequired).isRequired,
  users: PropTypes.arrayOf(UserShape.isRequired).isRequired,
  commentList: PropTypes.arrayOf(CommentShape.isRequired).isRequired,
};

export default PostList;
