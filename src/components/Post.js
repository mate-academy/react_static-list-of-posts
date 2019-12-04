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
      <div className="ui text container">
        <b className="first">{`Post ${id}: ${title}`}</b>
        <p>
          { `"${body}"`}
        </p>
      </div>
    </div>
    <div className="ui hidden divider" />
    <CommentList commentList={commentList} />
  </div>

);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
