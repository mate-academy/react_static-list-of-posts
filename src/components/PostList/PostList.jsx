import React from 'react';
import PropTypes from 'prop-types';
import { PostType, CommentType, UserType } from '../Types/Types';
import { Post } from './Post';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ postList, commentList, userList }) => (
  <>
    {postList.map(post => (
      <>
        <hr />
        <User
          user={userList.find(user => user.id === post.userId)}
        />
        <div key={post.id}>
          <Post {...post} />
        </div>
        <CommentList
          commentList={
            commentList.filter(comment => comment.postId === post.id)
          }
        />
      </>
    ))}
  </>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PostType).isRequired,
  commentList: PropTypes.arrayOf(CommentType).isRequired,
  userList: PropTypes.arrayOf(UserType).isRequired,
};
