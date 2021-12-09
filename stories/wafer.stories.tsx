import { Meta } from '@storybook/react';
import React from 'react';

import { Wafer, WaferProps } from '../src/Wafer';

export default {
  title: 'Example/Wafer',
  component: Wafer,
  argTypes: {
    onSelect: { action: 'onSelect' },
  },
} as Meta;

export function Control(props: WaferProps) {
  const pickedItems = [{ index: '3' }, { index: '5', label: 'owner' }];
  const selected = ['3', '12', { x: 3, y: 3 }];
  return (
    <Wafer
      pickedItems={pickedItems}
      selected={selected}
      size={320}
      diameter={{ value: 300, units: 'mm' }}
      chipHeight={{ value: 20, units: 'mm' }}
      chipWidth={{ value: 20, units: 'mm' }}
    />
  );
}
