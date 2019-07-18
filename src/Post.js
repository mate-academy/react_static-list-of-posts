import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Comment from './Comment';
import users from './api/users';
import comments from './api/comments';

function Post({ post }) {
  const findUser = users.find(user => user.id === post.userId);
  const user = <User key={findUser.id} user={findUser} />;

  const filterCom = comments.filter(com => com.postId === post.id);
  const Comments = filterCom.map(com => <Comment key={com.id} comment={com} />);

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {user}
      <h3>Comments</h3>
      <hr />
      {Comments}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}.isRequired;

export default Post;
