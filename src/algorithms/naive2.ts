import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { COLOR } from '../consts';
import { console } from '../store';

class Naive2 extends BaseAlgorithm {
    name = 'Podejście proste, wersja 2';

    draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][] {
        if (this.isVerticalLine(x0, x1)) {
            return this.drawVerticalLine([x0, y0], [x1, y1]);
        }
        const result = clearBuffer();

        const startX = Math.min(x0, x1);
        const endX = Math.max(x0, x1);
        const startY = Math.min(y0, y1);
        const endY = Math.max(y0, y1);

        const a = (y1 - y0) / (x1 - x0);
        const b = y0 - a * x0;
        console.update((value) => [...value, `a = ${a}; b = ${b}`]);

        if (Math.abs(a) <= 1) {
            for (let x = startX; x <= endX; x++) {
                const y = a * x + b;
                result[x][Math.round(y)] = COLOR;
                console.update((value) => [...value, `x = ${x}; y = ${y}`]);
            }
        } else {
            for (let y = startY; y <= endY; y++) {
                const x = (y - b) / a;
                result[Math.round(x)][y] = COLOR;
                console.update((value) => [...value, `x = ${x}; y = ${y}`]);
            }
        }

        return result;
    }
}

export const naive2 = new Naive2();
