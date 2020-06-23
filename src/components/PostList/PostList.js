import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { commentsShape, usersShape, postsShape }
  from '../../api/preparedPostsShape';

const PostList = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(post => (
      <>
        <div className="card mb-3">
          <User user={post.user} />
          <Post key={post.id} title={post.title} body={post.body} />
        </div>
        <CommentList comments={post.comments} />
      </>
    ))}
  </>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(
    postsShape,
    usersShape,
    commentsShape,
  ).isRequired,
};

export { PostList };
