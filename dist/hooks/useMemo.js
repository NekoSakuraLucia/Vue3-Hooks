import { ref, computed } from "vue";
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
export function useMemo(getter, dependencies) {
    const previousDependencies = ref(null);
    const areDependenciesEqual = (a, b) => {
        if (a === null)
            return false;
        if (a.length !== b.length)
            return false;
        return a.every((value, index) => Object.is(value, b[index]));
    };
    const memoizedValue = computed(() => {
        if (!areDependenciesEqual(previousDependencies.value, dependencies)) {
            previousDependencies.value = dependencies;
            return getter();
        }
        return previousDependencies.value ? getter() : getter();
    });
    return memoizedValue;
}
