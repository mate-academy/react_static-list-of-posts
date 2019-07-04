import React from "react"
import PropTypes from 'prop-types';

import User from './User'
import CommentList from './CommentList'

const Post = ({ items }) => (
  <ul>
    {items.map(item => (
      <li className="post_section">
        <div className="user-post">
          <div className="post">
            <h2 className="title_post">{item.title}</h2>
            <p>{item.body}</p>
          </div>
          <User userItem={item} />
        </div>
        <p className="comment_tab">Comment:</p>
        <CommentList listItems={item} />
      </li>
    ))}
  </ul>
);

Post.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
