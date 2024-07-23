import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIcon href="#"><FaFacebookF /></SocialIcon>
        <SocialIcon href="#"><FaTwitter /></SocialIcon>
        <SocialIcon href="#"><FaInstagram /></SocialIcon>
        <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
      </SocialIcons>
      <FooterText>&copy; 2024 Insight Decor. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;