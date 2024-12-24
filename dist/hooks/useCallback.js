import { shallowRef, watch } from "vue";
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
export function useCallback(callback, dependencies) {
    const previousDependencies = shallowRef(null);
    const memoizedCallback = shallowRef(callback);
    const areDependenciesEqual = (a, b) => {
        if (a === null)
            return false;
        if (a.length !== b.length)
            return false;
        return a.every((value, index) => Object.is(value, b[index]));
    };
    watch(() => dependencies, (newDependencies) => {
        if (!areDependenciesEqual(previousDependencies.value, newDependencies)) {
            memoizedCallback.value = callback;
            previousDependencies.value = newDependencies;
        }
    }, { immediate: true, deep: false });
    return memoizedCallback;
}
