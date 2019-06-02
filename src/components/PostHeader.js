import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ time, author }) => (
  <div className="post-header">
    <img src={author.avatar} alt="avatar" />
    <div className="post-header-content">
      <strong>{author.name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  time: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
