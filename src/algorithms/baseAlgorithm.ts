import type { IAlgorithm } from '../types';
import { clearBuffer } from '../helpers/clearBuffer';
import { COLOR } from '../consts';
import { console } from '../store';

export abstract class BaseAlgorithm implements IAlgorithm {
    abstract name: string;

    abstract draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][];

    protected isHorizontalLine(y0: number, y1: number): boolean {
        return y0 === y1;
    }

    protected isVerticalLine(x0: number, x1: number): boolean {
        return x0 === x1;
    }

    protected drawHorizontalLine([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][] {
        const result = clearBuffer();
        const startPoint = Math.min(x0, x1);
        const endPoint = Math.max(x0, x1);
        for (let x = startPoint; x <= endPoint; x++) {
            result[x][y0] = COLOR;
            console.update((value) => [...value, `x = ${x}; y = ${y0}`]);
        }

        return result;
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
