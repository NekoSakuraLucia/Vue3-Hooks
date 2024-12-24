import { type ShallowRef } from "vue";
/**
 * A custom hook similar to React's useCallback for Vue 3.
 * This hook memoizes a function and updates it only when the dependencies change.
 *
 * @template T - The type of the callback function.
 * @template D - The type of the dependencies array.
 * @param callback - The function to be memoized.
 * @param dependencies - An array of dependencies that the callback depends on.
 * @returns A memoized version of the callback function.
 */
export declare function useCallback<T extends (...args: Parameters<T>) => ReturnType<T>, D extends readonly unknown[]>(callback: T, dependencies: D): ShallowRef<T>;
//# sourceMappingURL=useCallback.d.ts.map