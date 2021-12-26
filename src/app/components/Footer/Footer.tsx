import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo/Logo';

const FooterContainer = styled.div`
  /* min-height: 24em; */
  background-color: #1a374d;
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    min-w-full
    pt-10
    md:pt-16
    
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-10
    md:pr-10
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-400
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-2
    md:pl-10
    md:pr-10
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color='white' />
          <AboutText>
            RoyalCycle is a Motorcycle renting and sharing company located in
            many countries across the world which has high quality Motorcycles
            and top rated services
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle> Categorise</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#'>Home</a>
            </ListItem>
            <ListItem>
              <a href='#'>Motorcycles</a>
            </ListItem>
            <ListItem>
              <a href='#'>Services</a>
            </ListItem>
            <ListItem>
              <a href='#'> Blog</a>
            </ListItem>
            <ListItem>
              <a href='#'>About Us</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle> Help Support</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#'>FAQ</a>
            </ListItem>
            <ListItem>
              <a href='#'>Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href='#'>Support</a>
            </ListItem>
            <ListItem>
              <a href='#'> Terms &amp; Conditions</a>
            </ListItem>
            <ListItem>
              <a href='#'>Contact Us</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+46 700-45-111</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@royalcycle.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} RoyalCycle. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
