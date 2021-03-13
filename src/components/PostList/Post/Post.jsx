import React from 'react';
import PropTypes from 'prop-types';
import comments from '../../../api/comments';
import CommentsList from '../CommentsList/CommentsList';
import './Post.scss';
import users from '../../../api/users';

const Post = (props) => {
  const commentUnderPost = comments.filter(
    id => props.postInfo.id === id.postId,
  );

  const currentUser = users.find(user => props.postInfo.userId === user.id);

  return (
    <div className="post">
      <div className="post__author">
        <div className="post__author-name">
          {currentUser.name}
        </div>
        <div className="post__author-email">
          {currentUser.email}
        </div>
      </div>
      <div className="post__title">
        {props.postInfo.title}
      </div>
      <div className="post__text">
        {props.postInfo.body}
      </div>
      <CommentsList list={commentUnderPost} />
    </div>
  );
};

Post.propTypes = {
  postInfo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
