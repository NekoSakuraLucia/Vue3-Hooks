import { type ComputedRef } from "vue";
/**
 * A custom hook similar to React's useMemo for Vue 3.
 * This hook memoizes the result of a computation and recalculates it only when the dependencies change.
 *
 * @template T - The type of the computed value.
 * @template D - The type of the dependencies array.
 * @param getter - A function that computes the value to be memoized.
 * @param dependencies - An array of dependencies that the memoized value depends on.
 * @returns A computed reference to the memoized value.
 */
export declare function useMemo<T, D extends readonly unknown[]>(getter: () => T, dependencies: D): ComputedRef<T>;
//# sourceMappingURL=useMemo.d.ts.map