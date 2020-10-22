import React, { CSSProperties, FunctionComponent, useMemo } from 'react';

import WaferCircle from './WaferCircle';
import { calculateDiameter, listLabels } from './utils';

// An item is a square in the wafer grid
export interface WaferItem {
  index: string;
  label?: string;
}

// Main component properties
export interface WaferProps {
  rows: number;
  columns: number;
  size: number;
  pickedItems: WaferItem[]; // List of taken items
  onSelect?: () => void;
}

/**
 * CSS for the root component
 * @param columns Number of columns
 * @param size Pixel's size of the parent square
 */
function getWaferStyle(columns: number, size: number): CSSProperties {
  return {
    height: size,
    width: size,
    display: 'grid',
    gap: 0,
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    borderWidth: '1.5px 0 0 1.5px',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
  };
}

/**
 * CSS for each square in the grid
 * @param rows Number of rows
 * @param columns Number of columns
 * @param size Pixel's size of the parent square
 */
function getItemStyle(
  rows: number,
  columns: number,
  size: number,
): CSSProperties {
  return {
    height: size / rows - 1.5,
    width: size / columns - 1.5,
    borderWidth: '0 1.5px 1.5px 0',
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
}

export const Wafer: FunctionComponent<WaferProps> = (props) => {
  const { rows, columns, size, pickedItems = [] } = props;
  const devices = useMemo(() => listLabels(rows, columns, pickedItems), [
    rows,
    columns,
    pickedItems,
  ]);
  const waferStyle = useMemo(() => getWaferStyle(columns, size), [
    columns,
    size,
  ]);
  const itemStyle = useMemo(() => getItemStyle(rows, columns, size), [
    rows,
    columns,
    size,
  ]);
  const diameter = useMemo(() => calculateDiameter(size, rows, columns), [
    rows,
    columns,
    size,
  ]);
  return (
    <div style={waferStyle}>
      <WaferCircle diameter={diameter} size={size} />
      {devices.map(({ label, picked }, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={`device_${index}`}
          style={
            picked ? { ...itemStyle, backgroundColor: '#5dbb6d' } : itemStyle
          }
        >
          {label}
        </div>
      ))}
    </div>
  );
};
