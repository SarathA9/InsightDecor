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

  .jimu-primary-loading {
    position: absolute;
    right: calc(50% - 6.8px);
    top: calc(50% - 16px);
    width: 13.6px;
    height: 32px;
    background: #076fe5;
    text-indent: -9999em;
    margin: auto;
    -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;
    animation: loading-keys-app-loading 0.8s infinite ease-in-out;
  }

  .jimu-primary-loading:before,
  .jimu-primary-loading:after {
    content: '';
    position: absolute;
    top: 0;
    width: 13.6px;
    height: 32px;
    background: #076fe5;
    -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;
    animation: loading-keys-app-loading 0.8s infinite ease-in-out;
  }

  .jimu-primary-loading:before {
    left: -19.992px;
  }

  .jimu-primary-loading:after {
    left: 19.992px;
    -webkit-animation-delay: 0.32s !important;
    animation-delay: 0.32s !important;
  }

  @-webkit-keyframes loading-keys-app-loading {
    0%, 80%, 100% {
      opacity: .75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }

  @keyframes loading-keys-app-loading {
    0%, 80%, 100% {
      opacity: .75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="jimu-primary-loading"></div>
    </LoaderWrapper>
  );
};

export default Loader;
