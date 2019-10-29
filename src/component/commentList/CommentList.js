import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';

function CommentList(props) {
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
      <div className="ui comments">
        <div className="comment">
          <div className="avatar">
            <img src={generatorAvatar()} alt="avatar" />
          </div>
          <div className="content">
            <div>
              <div className="text">
                <Comment body={props.comment.body} />
              </div>
              <Comment email={props.comment.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CommentList.propTypes = {
  comment: PropTypes.isRequired,
};

export default CommentList;
