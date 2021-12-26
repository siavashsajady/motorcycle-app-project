import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IMotor } from '../../../typings/Motorcycle';
import { Motorcycle } from '../../components/Motorcycle/Motorcycle';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/Responsive/Responsive';

const TopMotorsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;
const MotorsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;
export function TopMotorcycles() {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testMotor: IMotor = {
    name: ' Harley Davidson',
    mileage: '15k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/tvs-apache-rtr-2020-1121x620.png',
    dailyPrice: 28,
    monthlyPrice: 879,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testMotor1: IMotor = {
    name: 'TVS',
    mileage: '17k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/tvs-apache-rtr-160-2-1152x608.png',
    dailyPrice: 42,
    monthlyPrice: 1005,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testMotor2: IMotor = {
    name: 'HONDA',
    mileage: '40k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/tvs-apache-rtr-2020-1121x620.png',
    dailyPrice: 35,
    monthlyPrice: 900,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const Motorcycles = [
    <Motorcycle {...testMotor} />,
    <Motorcycle {...testMotor1} />,
    <Motorcycle {...testMotor2} />,
    <Motorcycle {...testMotor1} />,
    <Motorcycle {...testMotor} />,
  ];

  const numberOfDots = isMobile
    ? Motorcycles.length
    : Math.ceil(Motorcycles.length / 3);

  return (
    <TopMotorsContainer>
      <Title>Expolre Our Top Motorcycles</Title>
      <MotorsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={Motorcycles}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </MotorsContainer>
    </TopMotorsContainer>
  );
}
