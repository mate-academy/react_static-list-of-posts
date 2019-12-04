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
    <div className="ui segment">
      <b className="ui center aligned container">{`Post ${id}: ${title}`}</b>
      <p>
        {body}
      </p>
    </div>
    <div className="ui hidden divider" />
    <CommentList commentList={commentList} />
  </div>

);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
