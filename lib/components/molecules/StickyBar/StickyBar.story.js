import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './StickyBar.mock';

// Import Styled Component to showcase variations
import StickyBar, { StickyBarVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
storiesOf('Molecules/StickyBar', module)
  .addParameters({ jest: ['StickyBar', 'StickyBarVanilla'] })
  .add('Knobs', () => (
    <StickyBarVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('StickyBar', () => (
    <StickyBar {...defaultConfig}>
      <li key="mockKey1">List Element 1</li>
      <li key="mockKey2">List Element 2</li>
      <li key="mockKey2">Some Data.....</li>
    </StickyBar>
  ));