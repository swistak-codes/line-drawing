import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { console } from '../store';
import { COLOR } from '../consts';

class WithAccumulator extends BaseAlgorithm {
    name = 'Podejście z akumulatorem błędów';

    draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][] {
        if (this.isVerticalLine(x0, x1)) {
            return this.drawVerticalLine([x0, y0], [x1, y1]);
        }
        const result = clearBuffer();

        const a = (y1 - y0) / (x1 - x0);
        const invA = 1 / a;
        let e = -0.5;
        console.update((value) => [...value, `a = ${a}`]);

        if (a >= 0 && a <= 1) {
            const startX = Math.min(x0, x1);
            const endX = Math.max(x0, x1);
            const startY = startX === x0 ? y0 : y1;

            let y = startY;
            for (let x = startX; x <= endX; x++) {
                console.update((value) => [...value, `x = ${x}; y = ${y}, e = ${e}`]);
                result[x][y] = COLOR;
                e = e + a;
                if (e >= 0) {
                    y = y + 1;
                    e = e - 1;
                }
            }
        } else if (a > 1) {
            const startY = Math.min(y0, y1);
            const endY = Math.max(y0, y1);
            const startX = startY === y0 ? x0 : x1;

            let x = startX;
            for (let y = startY; y <= endY; y++) {
                console.update((value) => [...value, `x = ${x}; y = ${y}, e = ${e}`]);
                result[x][y] = COLOR;
                e = e + invA;
                if (e >= 0) {
                    x = x + 1;
                    e = e - 1;
                }
            }
        } else if (a < -1) {
            const startY = Math.max(y0, y1);
            const endY = Math.min(y0, y1);
            const startX = startY === y0 ? x0 : x1;

            let x = startX;
            for (let y = startY; y >= endY; y--) {
                console.update((value) => [...value, `x = ${x}; y = ${y}, e = ${e}`]);
                result[x][y] = COLOR;
                e = e - invA;
                if (e >= 0) {
                    x = x + 1;
                    e = e - 1;
                }
            }
        } else if (a <= 0 && a >= -1) {
            const startX = Math.max(x0, x1);
            const endX = Math.min(x0, x1);
            const startY = startX === x0 ? y0 : y1;

            let y = startY;
            for (let x = startX; x >= endX; x--) {
                console.update((value) => [...value, `x = ${x}; y = ${y}, e = ${e}`]);
                result[x][y] = COLOR;
                e = e - a;
                if (e >= 0) {
                    y = y + 1;
                    e = e - 1;
                }
            }
        }

        return result;
    }
}

export const withAccumulator = new WithAccumulator();
