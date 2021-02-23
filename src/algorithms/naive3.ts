import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { COLOR } from '../consts';
import { console } from '../store';

class Naive3 extends BaseAlgorithm {
    name = 'Podejście proste, wersja 3';

    draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][] {
        if (this.isVerticalLine(x0, x1)) {
            return this.drawVerticalLine([x0, y0], [x1, y1]);
        }
        const result = clearBuffer();

        const a = (y1 - y0) / (x1 - x0);
        const invA = 1 / a;
        console.update((value) => [...value, `a = ${a}`]);

        if (Math.abs(a) <= 1) {
            const startX = Math.min(x0, x1);
            const endX = Math.max(x0, x1);
            const startY = startX === x0 ? y0 : y1;

            let y = startY;
            for (let x = startX; x <= endX; x++) {
                console.update((value) => [...value, `x = ${x}; y = ${y}`]);
                result[x][Math.round(y)] = COLOR;
                y = y + a;
            }
        } else {
            const startY = Math.min(y0, y1);
            const endY = Math.max(y0, y1);
            const startX = startY === y0 ? x0 : x1;

            let x = startX;
            for (let y = startY; y <= endY; y++) {
                console.update((value) => [...value, `x = ${x}; y = ${y}`]);
                result[Math.round(x)][y] = COLOR;
                x = x + invA;
            }
        }

        return result;
    }
}

export const naive3 = new Naive3();
