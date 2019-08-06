import React from 'react';
import PropTypes from "prop-types";
import './Comment.css';

const Comment = props => (
  <div className="comment">
    <div className="comment__decoration">
      <div> </div>
      <p>+</p>
      <div> </div>
    </div>
    <div className="comment__wrapper">
      <div className="comment__author">
        <p className="comment__author__name">{props.comment.name}</p>
        <p className="comment__author__email">{props.comment.email}</p>
      </div>
      <p className="comment__text">{props.comment.body}</p>
    </div>
  </div>
);

export default Comment;
