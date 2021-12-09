import type { Value } from 'cheminfo-types';
import Qty from 'js-quantities';

import { WaferItem } from './Wafer';

/**
 * Calculate the approximated number of dices per wafer.
 * @param diameter - Diameter of the wafer
 * @param area - Area of the wafer sample
 * @returns Approximate number of wafer items
 */
export function calculateDPW(diameter: number, area: number) {
  return (
    (Math.PI * diameter * diameter) / (4 * area) -
    (Math.PI * diameter * 0.58) / Math.sqrt(area)
  );
}

/**
 * Parse a string to a number-units pair.
 * @param text - Value in a text format
 * @example '1.5 m' -> {value: 1.5, units: 'm'}
 * @returns Formatted value
 */
export function fromTextToValue(text: string): Value {
  const parser = new Qty(text);
  return { value: parser.scalar, units: parser.units() };
}

const UNITS = 'mm';
export function unifyUnits(value: Value) {
  return Qty(value.value, value.units ?? UNITS).to(UNITS).scalar;
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
  /** List of dices that are assigned to a user */
  picked: WaferItem[];
  width: number;
  height: number;
  center: number;
  radius: number;
}

/**
 * Iterates over the wafer grid and returns the labels for each item, calculating the dices
 * that are inside the wafer.
 * @param labelsParams - Labels parameters
 * @returns Labels for all the wafer dices, including the picked ones
 */
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
