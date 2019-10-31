/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import { generatorAvatar } from '../generatorAvatar';

function Post({ post }) {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <img className="ui avatar image" src={generatorAvatar()} alt="ava" />
          <User name={post.user.name} />
        </div>
        <div className="image">
          <img src={generatorAvatar()} alt="ava" />
        </div>
        <div className="content">Комментарии</div>
      </div>
      {post.comments
        .map((comment, index) => <CommentList key={index} comment={comment} />)}
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

Post.defaultProps = {
  post: 'name',
};

export default Post;
