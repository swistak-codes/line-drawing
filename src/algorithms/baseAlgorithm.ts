import type { IAlgorithm } from '../types';
import { clearBuffer } from '../helpers/clearBuffer';
import { COLOR } from '../consts';
import { console } from '../store';

export abstract class BaseAlgorithm implements IAlgorithm {
    abstract name: string;

    abstract draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][];

    protected isVerticalLine(x0: number, x1: number): boolean {
        return x0 === x1;
    }

    protected drawVerticalLine([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][] {
        const result = clearBuffer();
        const startPoint = Math.min(y0, y1);
        const endPoint = Math.max(y0, y1);
        for (let y = startPoint; y <= endPoint; y++) {
            result[x0][y] = COLOR;
            console.update((value) => [...value, `x = ${x0}; y = ${y}`]);
        }

        return result;
    }
}
