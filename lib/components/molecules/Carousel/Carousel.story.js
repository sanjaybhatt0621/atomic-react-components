import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Carousel.mock';
import Image from '../../atoms/Image';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

// Import Styled Component to showcase variations
import Carousel, {
  CarouselVanilla,
  SlideWrapper,
  Slide,
  SlideWrapperVanilla,
  SlideVanilla,
  Dots,
} from '.';

storiesOf('Molecules/Carousel', module)
  .addParameters({ jest: ['Carousel', 'CarouselVanilla'] })
  .add('Carousel Vanilla', () => (
    <CarouselVanilla {...defaultConfig}>
      <SlideWrapperVanilla>
        <SlideVanilla>
          <Image src={image1} alt="1.jpg" />
        </SlideVanilla>
        <SlideVanilla>
          <Image src={image2} alt="2.jpg" />
        </SlideVanilla>
        <SlideVanilla>
          <Image src={image3} alt="3.jpg" />
        </SlideVanilla>
        <SlideVanilla>
          <Image src={image4} alt="4.jpg" />
        </SlideVanilla>
      </SlideWrapperVanilla>
      <Dots />
    </CarouselVanilla>
  ))
  .add('Carousel', () => (
    <Carousel {...defaultConfig}>
      <SlideWrapper>
        <Slide>Test 1</Slide>
        <Slide>Test 2</Slide>
        <Slide>Test 3</Slide>
        <Slide>Test 4</Slide>
      </SlideWrapper>
      <Dots />
    </Carousel>
  ));
