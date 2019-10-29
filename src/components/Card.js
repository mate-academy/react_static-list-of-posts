import React from 'react';
import DropDown from "./DropDown";
import User from "./User";

function Card({ post }) {
  const wide = Math.round(Math.random() * (410 - 390) + 800);
  const height = Math.round(Math.random() * (410 - 390) + 900);
  return (
    <div className="ui card">
      <div className="content">
        <div className="right floated meta"> {post.id} h ago</div>
        <img className="ui avatar image" src={`https://source.unsplash.com/${wide}x${height}/?man,girl,blog,posts,notes,fashion`} />
        <User user={post.user} />
      </div>
      <div className="image">
        <img className="big_image" src={`https://source.unsplash.com/${wide}x${height}/?man,girl,blog,posts,notes,fashion`} />
      </div>
      <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <span className="right floated">
          <i className="heart outline like icon" />
          {} likes
        </span>
        <div className="click">
          <i className="comment icon" />
          {post.comment.length} comments
        </div>
      </div>
      <DropDown post={post} />
      <div className="extra content">
        <div className="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
}

export default Card;
