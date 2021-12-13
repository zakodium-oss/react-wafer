import { Meta } from '@storybook/react';
import React from 'react';

import { fromTextToValue, Wafer, WaferProps } from '../src';

export default {
  title: 'Wafer',
  component: Wafer,
  argTypes: {
    onSelect: { action: 'onSelect' },
  },
  args: {
    pickedItems: [],
    selected: [],
    diameter: '300 mm',
    size: 320,
    hideText: false,
    chipHeight: '70 mm',
    chipWidth: '50 mm',
    prepend: 'A',
  },
} as Meta<typeof Wafer>;

type PropsList = 'diameter' | 'chipHeight' | 'chipWidth';
type TemplateArgs = Exclude<WaferProps, PropsList> & Record<PropsList, string>;

export const Text = (args: TemplateArgs) => {
  const diameter = fromTextToValue(args.diameter);
  const chipHeight = fromTextToValue(args.chipHeight);
  const chipWidth = fromTextToValue(args.chipWidth);
  return (
    <Wafer
      {...args}
      diameter={diameter}
      chipHeight={chipHeight}
      chipWidth={chipWidth}
    />
  );
};
Text.storyName = 'Text example';
