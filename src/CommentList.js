import React from 'react';
import PropTypes from 'prop-types';

const CommentList = (props) => (
  <div className="postlist_list">
  {props.comments.map(comment =>(
    <div>
     <p><b>Email: </b> {comment.email} </p>
     <p><b>Comment name: </b> {comment.name} </p>
     <p><b>Comment body: </b>{comment.body} </p>
    </div>
  ))}
 </div>
);

CommentList.propTypes = {
 comment: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.string,
  }).isRequired
};

export default CommentList;
