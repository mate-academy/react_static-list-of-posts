import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import CommentList from '../commentList/CommentList';

function Post(props) {
  function generatorAvatar() {
    const num = Math.ceil(Math.random() * 10);

    switch (num) {
      case 1:
      case 2:

        return 'https://semantic-ui.com/images/avatar2/large/kristy.png';
      case 3:
      case 4:

        return 'https://semantic-ui.com/images/avatar2/large/matthew.png';
      case 5:
      case 6:

        return 'https://semantic-ui.com/images/avatar2/large/molly.png';
      case 7:
      case 8:

        return 'https://semantic-ui.com/images/avatar/large/jenny.jpg';
      default:

        return 'https://semantic-ui.com/images/avatar2/large/elyse.png';
    }
  }

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
