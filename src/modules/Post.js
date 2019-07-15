import React from 'react';
import PropTypes from 'prop-types';

const Post = ({name, email, address, title, body}) => (
  <div className='post'>
    <div className='postUp'>
      <div className='author'>
        {name}
      </div>
      <div className='author'>
        {email}
      </div>
    </div>

    <div className="postTitle">
      <h1>{title}</h1>
    </div>

    <div className="postBody">
      <p className='postText'>{body}</p>
    </div>

    <div className="postFooter">
      <div className='author'>
        Come and get me sucker ---
      </div>
      <div className='author'>
        Here is my IRL address!!!
      </div>
      <div className='author'>
        --- {address.zipcode},&nbsp;
            {address.city},&nbsp;
            {address.street} str.,&nbsp;
            {address.suite}
      </div>
    </div>
  </div>
);

Post.defaultProps = {
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

Post.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  address: PropTypes.object,
}

export default Post;
