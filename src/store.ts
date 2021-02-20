import { writable, derived } from 'svelte/store';
import { clearBuffer } from './helpers/clearBuffer';
import { BORDER_LIMIT } from './consts';

export const frameBuffer = writable(clearBuffer());
export const zoom = writable(20);
export const userWantsBordered = writable(true);
export const linePoints = writable<number[][]>([]);

export const canHaveBorder = derived([zoom], ([$zoom]) => $zoom > BORDER_LIMIT);
export const isBordered = derived([userWantsBordered, canHaveBorder],
    ([$userWantsBordered, $canHaveBorder]) => !$canHaveBorder ? false : $userWantsBordered);

export const isEditable = derived([linePoints], ([$linePoints]) => $linePoints.length < 2);