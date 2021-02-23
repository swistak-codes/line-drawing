import { SIZE } from '../consts';

export function clearBuffer(): string[][] {
    const buffer = [...Array(SIZE)].map(() => Array(SIZE).fill('white'));
    return buffer;
}
