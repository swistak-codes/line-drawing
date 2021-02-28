import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { COLOR } from '../consts';
import { console } from '../store';

class Bresenham extends BaseAlgorithm {
    name = 'Algorytm Bresenhama';

    draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][] {
        let dx, dy, stepX, stepY;
        const result = clearBuffer();

        if (x0 < x1) {
            stepX = 1;
            dx = x1 - x0;
        } else {
            stepX = -1;
            dx = x0 - x1;
        }

        if (y0 < y1) {
            stepY = 1;
            dy = y1 - y0;
        } else {
            stepY = -1;
            dy = y0 - y1;
        }

        console.update((value) => [...value, `dx = ${dx}, dy = ${dy}`]);

        let x = x0;
        let y = y0;

        result[x][y] = COLOR;

        if (dx > dy) {
            const incrE = dy * 2;
            const incrNE = (dy - dx) * 2;
            let d = dy * 2 - dx;
            console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}`]);
            while (x !== x1) {
                x += stepX;
                if (d <= 0) {
                    d += incrE;
                } else {
                    d += incrNE;
                    y += stepY;
                }
                console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}`]);
                result[x][y] = COLOR;
            }
        } else {
            const incrE = dx * 2;
            const incrNE = (dx - dy) * 2;
            let d = dx * 2 - dy;
            console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}`]);
            while (y !== y1) {
                y += stepY;
                if (d < 0) {
                    d += incrE;
                } else {
                    d += incrNE;
                    x += stepX;
                }
                console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}`]);
                result[x][y] = COLOR;
            }
        }

        return result;
    }
}

export const bresenham = new Bresenham();
