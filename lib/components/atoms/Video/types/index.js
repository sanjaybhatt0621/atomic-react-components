// @flow
import type { Node } from 'react';

export type Props = {
  width?: Number,
  height?: Number,
  autoPlay?: Boolean,
  controls: Boolean,
  loop?: Boolean,
  muted?: Boolean,
  poster?: String,
  src: Array | String,
  type: Array | String,
  children?: Node,
};