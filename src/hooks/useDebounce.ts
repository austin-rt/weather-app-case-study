import { useEffect } from 'react';
import useTimeout from './useTimeout';

export default function useDebounce(callback: Function, delay: number, dependencies: any[]) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);

  // clear definition is wrapped in a useCallback
  // in /src/hooks/useTimeout.ts so this is a safe disable
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, []);
}
