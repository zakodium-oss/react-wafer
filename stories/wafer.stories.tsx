import { Meta, type StoryFn } from '@storybook/react';
import React from 'react';

import { Wafer, WaferProps } from '../src';

export default {
  title: 'Wafer',
  component: Wafer,
  argTypes: {
    onSelect: { action: 'onSelect' },
  },
  args: {
    pickedItems: [{ index: '3' }, { index: '5', label: 'owner' }],
    selected: ['3', '12', { x: 3, y: 3 }],
    diameter: { value: 300, units: 'mm' },
    size: 320,
  },
} satisfies Meta<WaferProps>;

const Template: StoryFn<WaferProps> = (args) => <Wafer {...args} />;

export const Basic = Template.bind({});
Basic.storyName = 'Simple example';
Basic.args = {
  chipHeight: { value: 70, units: 'mm' },
  chipWidth: { value: 50, units: 'mm' },
  hideText: false,
} satisfies Partial<WaferProps>;

export const Dens = Template.bind({});
Dens.storyName = 'Dense example';
Dens.args = {
  ...Basic.args,
  chipHeight: { value: 20, units: 'mm' },
  chipWidth: { value: 20, units: 'mm' },
  hideText: true,
} satisfies Partial<WaferProps>;
