import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment'

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.postPhoto = `https://source.unsplash.com/collection/190727/
    ${this.randomPhoto()}
    /?food,game,car,nature,animal`
  }

  randomPhoto = () => {
    return `
    ${Math.round(Math.random() * (500 - 450) + 450)}x
    ${Math.round(Math.random() * (450 - 400) + 400)}
    `
  }

  showComments = () =>
    this.setState(
      (prevState) => ({hidden: !prevState.hidden})
    );

  render() {
    const {id, title, body, comments, user: {name}} = this.props.post;

    return (
      <div className="post">
        <span className="authorName"><strong>{name}</strong></span>
        <div className="photo"><img src={this.postPhoto} className="main-image" alt='post' /></div>
        <p className="title"><strong>{title}</strong></p>
        <div className="bodyText">{body}</div>
        <span className={"commentsVisible"} onClick={this.showComments}>
          <strong>Watch comments ({comments.length})</strong></span>
        <div hidden={this.state.hidden} key={id}>
        {
          comments.map(comment => (
            <Comment
              comment={comment}
              key={comment.id}
            />
          ))
        }
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}


export default Post;
