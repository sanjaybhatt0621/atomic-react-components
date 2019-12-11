import { css } from 'styled-components';

export default css`
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

const styleSlideWrapper = css`
  display: flex;

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export { styleSlideWrapper };
