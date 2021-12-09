import type { Value } from 'cheminfo-types';
import Qty from 'js-quantities';

import { WaferItem } from './Wafer';

export function unifyUnits(value: Value) {
  return Qty(value.value, value.units ?? 'mm').to('mm').scalar;
}

export function calculateDPW(diameter: number, area: number) {
  return (
    (Math.PI * diameter * diameter) / (4 * area) -
    (Math.PI * diameter * 0.58) / Math.sqrt(area)
  );
}

export function calculateDivisions(diameter: number, length: number) {
  const divisions = Math.floor(diameter / length);
  const remainder = diameter % length;
  return divisions + (remainder > 0 ? 2 : 1);
}

function distance(x: number, y: number, center: number) {
  return Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));
}

interface DistanceMax {
  column: number;
  width: number;
  row: number;
  height: number;
  center: number;
}
export function maxDistance({
  column,
  width,
  row,
  height,
  center,
}: DistanceMax) {
  return Math.max(
    distance(column * width, row * height, center),
    distance(column * width + width, row * height, center),
    distance(column * width, row * height + height, center),
    distance(column * width + width, row * height + height, center),
  );
}

interface LabelsParams {
  columns: number;
  rows: number;
  picked: WaferItem[];
  width: number;
  height: number;
  center: number;
  radius: number;
}
export function listLabels({
  rows,
  columns,
  picked,
  width,
  height,
  center,
  radius,
}: LabelsParams): Array<{ label: string; picked: boolean }> {
  let labels = new Array(rows * columns);
  let index = 0;
  let currNumber = 0;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const pointRadius = maxDistance({
        column,
        width,
        row,
        height,
        center,
      });

      if (pointRadius >= radius) {
        labels[index] = { label: '', picked: false };
      } else {
        const label = String(++currNumber);
        const pickedSearch = picked.find((item) => item.index === label);
        labels[index] = pickedSearch
          ? { label: pickedSearch.label || label, picked: true }
          : { label, picked: false };
      }
      index++;
    }
  }
  return labels;
}
