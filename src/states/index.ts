import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

export const countAtom = atomWithImmer({ value: 0 });
export const testState = atom(0);
