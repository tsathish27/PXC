import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, size, className, children }) => {
  const baseClasses = 'inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1.5 text-xs' : size === 'lg' ? 'px-4 py-2 text-base' : 'px-3 py-1.5 text-sm';
  const variantClasses = variant === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-gray-700 hover:bg-gray-50';

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  className: '',
};

export default Button;
