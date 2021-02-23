export interface IAlgorithm {
    name: string;
    draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][];
}
