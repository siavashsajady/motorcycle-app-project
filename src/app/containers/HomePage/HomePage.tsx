import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookMotorcycle } from '../../components/BookMotorcycle/BookMotorcycle';
import { Footer } from '../../components/Footer/Footer';
import { Marginer } from '../../components/Marginer/Marginer';
import { Navbar } from '../../components/Navbar/Navbar';
import { AboutUs } from './AboutUs';
import { BookingSteps } from './BookingSteps';
import { TopMotorcycles } from './TopMotorcycles';
import { TopSection } from './TopSection';

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden

    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction='vertical' margin='3em' />
      <BookMotorcycle />
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <AboutUs />
      <Marginer direction='vertical' margin='8em' />
      <TopMotorcycles />
      <Footer />
    </PageContainer>
  );
}
