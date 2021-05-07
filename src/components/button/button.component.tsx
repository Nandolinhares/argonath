import React from 'react';

const Button: React.FC = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-blue-400 text-xl rounded text-gray-200"
    >
      {children}
    </button>
  )
}

export default Button;