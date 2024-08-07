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
    diameter: '6 inch',
    size: 320,
    hideText: false,
    chipHeight: '2 cm',
    chipWidth: '1.8 cm',
    prepend: 'A',
  },
};

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
