import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ post }) => (
  <div className="post">
    <PostHeader time={post.time} author={post.author} />
    <p>{post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
