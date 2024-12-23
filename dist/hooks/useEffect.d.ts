/**
 * Custom hook that allows you to perform side effects in a reactive manner.
 * This works similarly to React's `useEffect` and ensures that the effect is run
 * when the component is mounted and cleaned up when the component is unmounted.
 *
 * @param effect A function that performs the side effect. The function can optionally
 * return another function for cleanup, which will be run when the component is unmounted.
 */
export declare function useEffect(effect: () => void | (() => void)): void;
//# sourceMappingURL=useEffect.d.ts.map