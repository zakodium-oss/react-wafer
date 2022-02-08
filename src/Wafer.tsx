import type { Value } from 'cheminfo-types';
import React, { CSSProperties, useMemo } from 'react';

import { calculateDivisions, listLabels, unifyUnits } from './utils';

// An item is a square in the wafer grid
export interface WaferItem {
  index: string;
  label?: string;
}

// Main component properties
type PositionType = Record<'x' | 'y', number>;
export interface WaferProps {
  diameter: Value;
  chipWidth: Value;
  chipHeight: Value;
  rows?: number;
  columns?: number;
  borderError?: number;
  size: number;
  textStyle?: CSSProperties;
  /** List of taken items */
  pickedItems: WaferItem[];
  prepend?: string;
  onSelect?: (position: PositionType, label: string, picked: boolean) => void;
  selected?: Array<PositionType | string>;
  hideText?: boolean;
}

export function Wafer(props: WaferProps) {
  const {
    diameter,
    chipWidth,
    chipHeight,
    rows: forcedRows,
    columns: forcedColumns,
    borderError = 0,
    size,
    pickedItems = [],
    prepend = '',
    hideText = false,
    selected = [],
    textStyle = {},
    onSelect,
  } = props;

  const { rows, columns, width, height, center, radius } = useMemo(() => {
    const diameterPhysical = unifyUnits(diameter);
    const widthPhysical = unifyUnits(chipWidth);
    const heightPhysical = unifyUnits(chipHeight);

    const columns =
      forcedColumns ?? calculateDivisions(diameterPhysical, widthPhysical);
    const rows =
      forcedRows ?? calculateDivisions(diameterPhysical, heightPhysical);

    const widthSvg = size / columns;
    const heightSvg = size / rows;
    const radius = (diameterPhysical * widthSvg) / (2 * widthPhysical);
    return {
      rows,
      columns,
      radius,
      width: widthSvg,
      height: heightSvg,
      center: size / 2,
    };
  }, [diameter, chipWidth, chipHeight, size, forcedColumns, forcedRows]);

  const devices = useMemo(
    () =>
      listLabels({
        prepend,
        rows,
        columns,
        picked: pickedItems,
        width,
        height,
        center,
        radius,
        borderError,
      }),
    [
      prepend,
      rows,
      columns,
      pickedItems,
      width,
      height,
      center,
      radius,
      borderError,
    ],
  );

  const groupsSquares = useMemo(() => {
    let groupsSquares = new Array(rows);
    for (let row = 0; row < rows; row++) {
      let rowGroup = new Array(columns);
      for (let column = 0; column < columns; column++) {
        const index = row * columns + column;
        const translate = `translate(${column * width}, ${row * height})`;
        rowGroup[column] = (
          <g
            key={column}
            transform={translate}
            onClick={() =>
              onSelect(
                { x: column, y: row },
                devices[index].label,
                devices[index].picked,
              )
            }
          >
            <rect
              x={0}
              y={0}
              width={width}
              height={height}
              fill={devices[index].picked ? '#5dbb6d' : 'transparent'}
              stroke="#222"
            />
            {!hideText && (
              <text
                x={width / 2}
                y={height / 2}
                dominantBaseline="middle"
                textAnchor="middle"
                style={{ ...textStyle, userSelect: 'none' }}
              >
                {devices[index].label}
              </text>
            )}
          </g>
        );
      }
      groupsSquares[row] = <g key={row}>{rowGroup}</g>;
    }
    return groupsSquares;
  }, [rows, columns, height, width, devices, hideText, textStyle, onSelect]);

  const selectionBorders = useMemo(
    () =>
      selected.map((val) => {
        switch (typeof val) {
          case 'string': {
            // string
            const index = devices.findIndex(({ label }) => label === val);
            if (index < 0) return null;
            const x = (index % columns) * width;
            const y = Math.floor(index / columns) * height;
            return (
              <path
                key={`string-${val}`}
                d={`M${x} ${y}h${width}v${height}h${-width}Z`}
                fill="none"
                stroke="red"
              />
            );
          }
          case 'object': {
            // PositionType
            const { x, y } = val;
            return (
              <path
                key={`coord-${x}-${y}`}
                d={`M${x * width} ${y * height}h${width}v${height}h${-width}Z`}
                fill="none"
                stroke="red"
              />
            );
          }
          default: {
            throw new Error(
              `${typeof val} is not an accepted value for selection`,
            );
          }
        }
      }),
    [columns, devices, height, width, selected],
  );

  return (
    <svg height={size} width={size}>
      <circle cx={center} cy={center} fill="#549ADA" r={radius} />
      {groupsSquares}
      {selectionBorders}
    </svg>
  );
}
