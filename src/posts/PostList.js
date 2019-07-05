import React from "react";

import comments from "../api/comments";
import posts from "../api/posts";
import users from "../api/users";
import CommentList from "../comments/CommentList";
import Post from "../posts/Post";
import User from "../user/User";
import "../posts/Post.css";

const prepareData = (posts, users, comments) => {
  return posts.map(currentPost => ({
    ...currentPost,
    user: users.find(user => user.id === currentPost.userId),
    comments: comments.filter(comment => comment.postId === currentPost.id)
  }));
};

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: prepareData(posts, users, comments)
    });
  }

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <div className="post" key={post.id}>
            <Post post={post} />
            <User user={post.user} />
            <CommentList comments={post.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
