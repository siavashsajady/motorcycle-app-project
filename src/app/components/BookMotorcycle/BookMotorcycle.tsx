import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { Button } from '../Button/Button';
import { Marginer } from '../Marginer/Marginer';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from '../Responsive/Responsive';

// import { SCREENS } from '../responsive';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-3
    md:pr-3
    
    `};
`;

const ItemContainer = styled.div`
  ${tw`
        flex
        relative
    `}
`;

const Icon = styled.span`
  ${tw`
        text-blue-500 
        fill-current
        text-xs
        md:text-base
        mr-1 
        
    `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.span`
  ${tw`
        text-gray-600 
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300 
        mr-2 
        ml-2 
        md:mr-6 
        md:ml-6 

    `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookMotorcycle() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartClendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setIsReturnClendarOpen] = useState(false);

  const toggleStartDtaeCalendar = () => {
    setIsStartClendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setIsReturnClendarOpen(false);
  };

  const toggleReturnDtaeCalendar = () => {
    setIsReturnClendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setIsStartClendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDtaeCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDtaeCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Book Your Motorcycle' />
    </CardContainer>
  );
}
