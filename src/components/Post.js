import React from 'react';
import PropTypes from 'prop-types';
import UserData from './UserData';
import CommentList from './CommentsList';

const Post = ({ postOfList }) => (
  <div className="post-list">
    <h2>{postOfList.post.title}</h2>
    <p>{postOfList.post.body}</p>
    <UserData user={postOfList.user} />
    <div>
      <h3>Comments:</h3>
      {postOfList.comments.map(comment => <CommentList comment={comment} />)}
    </div>
  </div>
);

Post.propTypes = {
  postOfList: PropTypes.shape({
    post: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.array,
  }).isRequired,
};

/*Post.propTypes = {
  postOfList: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
    user: PropTypes.objectOf(),
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};*/
export default Post;
