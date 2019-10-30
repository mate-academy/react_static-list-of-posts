import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import { generatorAvatar } from '../generatorAvatar';

function CommentList(props) {
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
