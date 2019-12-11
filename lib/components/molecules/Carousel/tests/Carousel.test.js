import React from 'react';
import { shallow } from 'enzyme';

import { CarouselVanilla, SlideWrapperVanilla, SlideVanilla } from '../index';

describe('<Carousel />', () => {
  let CarouselComponent = '';
  beforeEach(() => {
    CarouselComponent = shallow(
      <CarouselVanilla>
        <SlideWrapperVanilla>
          <SlideVanilla>TEst 1 </SlideVanilla>
          <SlideVanilla>TEst 3 </SlideVanilla>
          <SlideVanilla>TEst 4 </SlideVanilla>
          <SlideVanilla>TEst 2 </SlideVanilla>
        </SlideWrapperVanilla>
      </CarouselVanilla>
    );
  });

  test('should render correctly', () => {
    expect(CarouselComponent).toMatchSnapshot();
  });

  it('should have slider wrapper as one child only', () => {
    expect(CarouselComponent.find('SlideWrapper')).toHaveLength(1);
  });
});

describe('<SlideWrapper />', () => {
  it('should render correctly', () => {
    const SlideWrapperComponent = shallow(
      <SlideWrapperVanilla>
        <SlideVanilla>TEst 1 </SlideVanilla>
        <SlideVanilla>TEst 3 </SlideVanilla>
      </SlideWrapperVanilla>
    );
    expect(SlideWrapperComponent).toMatchSnapshot();
  });

  it('should have only one slide wrapper', () => {
    const SlideWrapperComponent = shallow(
      <SlideWrapperVanilla>
        <SlideVanilla>TEst 1 </SlideVanilla>
        <SlideVanilla>TEst 3 </SlideVanilla>
      </SlideWrapperVanilla>
    );

    expect(SlideWrapperComponent.find('.carousel-section')).toHaveLength(1);
  });

  it('Children should have unique key attached', () => {
    const SlideWrapperComponent = shallow(
      <SlideWrapperVanilla>
        <SlideVanilla>TEst 1 </SlideVanilla>
        <SlideVanilla>TEst 3 </SlideVanilla>
      </SlideWrapperVanilla>
    );

    expect(SlideWrapperComponent.childAt(0).props().id).toEqual('slide_1');
  });
});

describe('<Slide />', () => {
  let SlideComponent = '';

  beforeEach(() => {
    SlideComponent = shallow(<SlideVanilla>TEst 1 </SlideVanilla>);
  });

  test('should render correctly', () => {
    expect(SlideComponent).toMatchSnapshot();
  });

  it('Should not have unique index prop', () => {
    expect(SlideComponent.childAt(0).props().id).not.toEqual('slide_1');
  });
});

describe('<Dots />', () => {
  let Dots = '';

  beforeEach(() => {
    Dots = shallow(<Dots />);
  });

  test('should render correctly', () => {
    expect(Dots).toMatchSnapshot();
  });

  test('should not have children', () => {
    expect(Dots.props().children).toHaveLength(0);
  });
});
