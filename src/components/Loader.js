// src/components/Loader.js
import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .loader {
    position: relative;
    width: 160px;
    height: 160px;
    border: 4px solid #282828;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.1),
      10px 10px 10px rgba(0, 0, 0, 0.4),
      inset -5px -5px 5px rgba(255, 255, 255, 0.2),
      inset 10px 10px 10px rgba(0, 0, 0, 0.4);
  }
  .loader:before {
    content: "";
    position: absolute;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
    z-index: 10;
    background: #212121;
    border-radius: 50%;
    border: 2px solid #292929;
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.2),
      inset 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
  .loader span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #00ffff, #ff00ff);
    filter: blur(20px);
    z-index: -1;
    animation: animate 0.5s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="loader">
        <span></span>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;