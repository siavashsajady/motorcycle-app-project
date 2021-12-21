import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ItemsContainer = styled.ul`
  ${tw`
        flex 
        list-none 

    `}
`;
const NavItem = styled.li`
  ${tw`
        text-xs
        md:text-base 
        text-black 
        font-medium 
        mr-1 
        md:mr-5 
        cursor-pointer 
        transition 
        duration-300 
        ease-in-out 
        hover:text-gray-700 
    `}
`;

export function NavItems() {
  return (
    <ItemsContainer>
      <NavItem>
        <a href='#'>Home</a>
      </NavItem>
      <NavItem>
        <a href='#'>MotorCycles</a>
      </NavItem>
      <NavItem>
        <a href='#'>Services</a>
      </NavItem>
      <NavItem>
        <a href='#'>Contact Us</a>
      </NavItem>
    </ItemsContainer>
  );
}
