// @flow
/**
 * Carousel
 */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import stylesCarousel, { styleSlideWrapper } from './Carousel.style';
import type { Props } from './types';
import { ListVanilla } from '../List';
import Button from '../../atoms/Button';

const SlideStatusContext = React.createContext({});
const CarouselDataContext = React.createContext([]);

/**
 * Add unique Index to all slides.
 *
 * @param {Array} slides
 *   all slides
 *
 * @return All slides with added slideIndex key as prop.
 */
const slideWithIndexKey = slides => {
  let i = 0;
  const children = React.Children.map(slides, slide => {
    i += 1;

    if (React.isValidElement(slide)) {
      return React.cloneElement(slide, {
        id: `slide_${i}`,
      });
    }

    return slide;
  });

  return children;
};

/**
 * Rendering list of dots
 *
 * @param {Object()} setItem
 *   Using to set the slide number.
 * @param {number} currentItem
 *   Show current slide number.
 */
function getSliderDots() {
  const carouselContent = useContext(CarouselDataContext);
  const slideContent = useContext(CarouselDataContext);
  const totalSlidesCount = carouselContent.slides.length;
  const currentIndex = slideContent.slideIndex;
  const setItem = slideContent.setSlideIndex;
  const countElements = [];

  for (let id = 1; id <= totalSlidesCount; id += 1) {
    countElements.push(
      <li key={id} className={classnames('atomic-item', { active: id === currentIndex })}>
        <Button
          type="button"
          onClick={() => setItem(id)}
          onKeyUp={() => setItem(id)}
          className="icon"
        >
          {id}
        </Button>
      </li>
    );
  }

  return countElements;
}

/**
 * Rendering wrapper of dots
 *
 * @param {Object()} setItem
 *   Using to set the slide number.
 * @param {number} currentItem
 *   Show current slide number.
 *
 * @return HTML
 *   Wrapper with UL | OL
 */
const getList = () => {
  return <ListVanilla>{getSliderDots()}</ListVanilla>;
};

/**
 * Carousel Main Element.
 *
 * @param {Element} children
 *   Wraps all tha carousel elements.
 *
 * @return Carousel.
 */
const Carousel = ({ children, className }: Props): Node => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slides, setSlidesContent] = useState([]);

  const setData = React.useCallback(data => setSlidesContent(data), []);

  return (
    <section className={classnames('carousel-wrapper', className)}>
      <CarouselDataContext.Provider value={{ slides, setData }}>
        <SlideStatusContext.Provider value={{ currentSlide: slideIndex, setSlideIndex }}>
          {children}
        </SlideStatusContext.Provider>
      </CarouselDataContext.Provider>
    </section>
  );
};

/**
 * Slide Wrapper.
 *
 * @param {Array} children
 *   Wraps all the slides.
 *
 * @return All slides in single wrapper.
 */
const SlideWrapper = ({ children, className }: Props): Node => {
  const slideContent = useContext(CarouselDataContext);
  const results = slideWithIndexKey(children);
  slideContent.setData(results);

  return (
    <div className={classnames('carousel-section', className)} aria-label="carousel">
      {results}
    </div>
  );
};

/**
 * Slide Container.
 *
 * @param {Element} children
 *   Will wraps the slide content.
 *
 * @return Single slide with wrapper.
 */
const Slide = ({ children, id, className }: Props): Node => {
  const SlideStatus = useContext(SlideStatusContext);

  return (
    <div
      className={classnames(
        'slide',
        { active: id === `slide_${SlideStatus.currentSlide}` },
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Dots Navigation.
 *
 * @param {Element} children
 *   Will wraps the slide content.
 *
 * @return Single slide with wrapper.
 */
const Dots = ({ className }: Props): Node => {
  return <div className={classnames('carousel-dots', className)}>{getList()}</div>;
};

Carousel.defaultProps = {};
SlideWrapper.defaultProps = {};
Slide.defaultProps = {};

export default styled(Carousel)`
  ${stylesCarousel};
`;

const styledSlideWrapper = styled(SlideWrapper)`
  ${styleSlideWrapper};
`;

const styledSlide = styled(Slide)`
  ${styleSlideWrapper};
`;

export {
  Carousel as CarouselVanilla,
  styledSlideWrapper as SlideWrapper,
  SlideWrapper as SlideWrapperVanilla,
  styledSlide as Slide,
  Slide as SlideVanilla,
  Dots,
};
