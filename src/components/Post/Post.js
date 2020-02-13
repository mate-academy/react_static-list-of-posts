import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export function Post({ post }) {
  const { title, body, user, comments } = post;
  // console.log(post);

  return (
    <>
      <ul className="post">
        <li>
          <h3>
            {title}
          </h3>
        </li>
        <li>
          {body}
        </li>
        <li>
          <User user={user} />
        </li>
        <li className="comments">
          <p>Comments:</p>
          <CommentList key={post.id} comments={comments} />
        </li>
      </ul>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};
