import React from 'react';
import Card from "./Card";

function PostList({ postsInfo }) {
  return (
    <div className="box">
      { postsInfo.map(post => {
        return (<Card post={post} key={post.id} />);
      })}
    </div>
  );
}

export default PostList;
