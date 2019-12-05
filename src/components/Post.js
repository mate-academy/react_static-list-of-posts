import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post: { id, user, title, body, commentList } }) => (
  <div className="ui green segment">
    <div className="ui left aligned container">
      <User userObj={user} />
    </div>
    <div className="ui hidden divider" />
    <div className="ui raised segment">
      <div>
        <h3>{title}</h3>
        <div className="ui hidden divider" />
        <p>
          { `"${body}"`}
        </p>
        <div className="ui hidden divider" />
      </div>
    </div>
    <div className="ui hidden divider" />
    <div>
      <CommentList comments={commentList} />
    </div>
  </div>
);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
