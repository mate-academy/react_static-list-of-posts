import React from 'react';
import './Header.css';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

const Header = () => (
  <>
    <h1>
      <span className="ui red header">Static</span>
      {' '}
      <span className="ui green header">list</span>
      {' '}
      <span className="ui yellow header">of</span>
      {' '}
      <span className="ui blue header">posts</span>
    </h1>
    <div className="ui statistics">
      <div className="teal statistic">
        <div className="value">
          {posts.length}
        </div>
        <div className="label">
          POSTS
        </div>
      </div>
      <div className="orange statistic">
        <div className="value">
          {users.length}
        </div>
        <div className="label">
          USERS
        </div>
      </div>
      <div className="purple statistic">
        <div className="value">
          {comments.length}
        </div>
        <div className="label">
          COMMENTS
        </div>
      </div>
    </div>
  </>
);

export default Header;
