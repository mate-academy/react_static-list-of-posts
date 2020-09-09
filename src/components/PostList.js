import React from 'react';
import { PostListPropTypes } from './PropTypes';
import { Post } from './Post';
import { User } from './User';
import { CommentList } from './CommentList';

export const PostList = ({ users, posts, comments }) => (
  <>
    {posts.map(post => (
      <div className="post" key={post.id}>
        <Post
          title={post.title}
          body={post.body}
        />
        <User
          user={users.find(user => user.id === post.userId)}
        />
        <h3>Comments:</h3>
        <div className="comment">
          <CommentList
            comments={comments.filter(comment => comment.postId === post.id)}
          />
        </div>
      </div>
    ))}
  </>
);

PostList.propTypes = PostListPropTypes;

PostList.defaultProps = {
  users: [],
  posts: [],
  comments: [],
};
