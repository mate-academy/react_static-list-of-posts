import React from 'react';
import CommentList from "../CommentList/CommentList";
import User from "../User/User";
import PropTypes from 'prop-types';


function Post({ title, body, user, comments}) {
  return (
    <>
      <h2>
        {title}
      </h2>

      <User {...user}/>

      <p>
        {body}
      </p>

      <CommentList comments={comments}/>
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Post;
