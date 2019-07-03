import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  static defaultProps = {
    name: 'Anonymous',
    email: 'pounding@reil.net',
    address: {
      zipcode: '666-999',
      city: 'HellTown',
      street: 'Elm',
      suite: '13x'
    },
    title: 'I\'ll be back',
    body: 'Wait me a little while... Pleeeease!'
  }

  render(props) {
    return (
      <div className='post'>
        <div className='postUp'>
          <div className='author'>
            {this.props.name}
          </div>
          <div className='author'>
            {this.props.email}
          </div>
        </div>

        <div className="postTitle">
          <h1>{this.props.title}</h1>
        </div>

        <div className="postBody">
          <p className='postText'>{this.props.body}</p>
        </div>

        <div className="postFooter">
          <div className='author'>
            Come and get me sucker ---
          </div>
          <div className='author'>
            Here is my IRL address!!!
          </div>
          <div className='author'>
            --- {this.props.address.zipcode},&nbsp;
                {this.props.address.city},&nbsp;
                {this.props.address.street} str.,&nbsp;
                {this.props.address.suite}
          </div>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  address: PropTypes.object,
}

export default Post;
