import { useCallback, useState } from 'react';
import { produce, Draft, freeze } from 'immer';

export type DraftFunction<T> = (draft: Draft<T>) => void;
export type Updater<T> = (arg: T | DraftFunction<T>) => void;
export type ImmerHook<T> = [T, Updater<T>];
// 函数签名
export function useImmer<T = unknown>(initialState: T | (() => T)): ImmerHook<T>;

export function useImmer<T>(initialState: T) {
  const [value, setValue] = useState(() =>
    freeze(typeof initialState === 'function' ? initialState() : initialState, true),
  );

  return [
    value,
    useCallback((updater: T | DraftFunction<T>) => {
      if (typeof updater === 'function') {
        setValue(produce(updater as DraftFunction<T>));
        return;
      }
      setValue(freeze(updater));
    }, []),
  ];
}
