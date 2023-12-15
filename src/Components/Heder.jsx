import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Assuming you have installed the 'react-icons' library

const Header = () => {
  const goToGitHub = () => {
    window.location.href = 'https://github.com'; // Replace with your GitHub repository URL
  };

  return (
    <div style={headerStyle}>
      <div style={leftSideStyle}>
        Ask YouTube
      </div>
      <div style={rightSideStyle} onClick={goToGitHub}>
        <span style={sourceCodeStyle}>Source Code → </span>
        <FaGithub size={24} />
      </div>
    </div>
  );
};

// Styling for the header and its components
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: '#333',
  color: 'white',
  borderRadius: '7px'
};

const leftSideStyle = {
  fontWeight: 'bold',
};

const rightSideStyle = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const sourceCodeStyle = {
  marginRight: '8px',
};

export default Header;
