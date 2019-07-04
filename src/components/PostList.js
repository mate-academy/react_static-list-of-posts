import React from "react"

import User from './User'
import Post from './Post'
import CommentList from './CommentList'

const PostList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li className="post_section">
        <div className="user-post">
          <Post postItem={item} />
          <User userItem={item} />
        </div>
        <p className="comment_tab">Comment:</p>
        <CommentList listItems={item} />
      </li>
    ))}
  </ul>
);

export default PostList;
