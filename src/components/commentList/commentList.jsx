import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/comment';
import '../commentList/commentList.css';

function CommentList({comments}) {
  return (
    <div className="comments__list comment">
      <ul className="comment__list">
        {
          comments.map(comment => (
            <li className="comment__item">
              <Comment {...comment} key={comment.id}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentList;

