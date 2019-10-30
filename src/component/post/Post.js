import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import { generatorAvatar } from '../generatorAvatar';

function Post(props) {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <img className="ui avatar image" src={generatorAvatar()} alt="ava" />
          <User name={props.post.user} />
        </div>
        <div className="image">
          <img src={generatorAvatar()} alt="ava" />
        </div>
        <div className="content">Комментарии</div>
      </div>
      {props.post.comments.map(comment => <CommentList comment={comment} />)}
    </>
  );
}

Post.propTypes = {
  post: PropTypes.isRequired,
};

export default Post;
