import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt, fallback }) => (
  <div className="relative inline-block">
    {src ? (
      <img className="rounded-full w-8 h-8 border-2 border-primary" src={src} alt={alt} />
    ) : (
      <div className="rounded-full w-8 h-8 border-2 border-primary flex items-center justify-center bg-gray-300 text-gray-700">
        {fallback}
      </div>
    )}
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  src: '',
  alt: 'Avatar',
};

export default Avatar;
