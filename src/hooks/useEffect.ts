import { onMounted, onUnmounted } from "vue";

/**
 * Custom hook that allows you to perform side effects in a reactive manner.
 * This works similarly to React's `useEffect` and ensures that the effect is run
 * when the component is mounted and cleaned up when the component is unmounted.
 * 
 * @param effect A function that performs the side effect. The function can optionally
 * return another function for cleanup, which will be run when the component is unmounted.
 */
export function useEffect(effect: () => void | (() => void)) {
    let cleanup: (() => void) | undefined;

    const runEffect = () => {
        if (cleanup) cleanup();
        const result = effect();
        if (typeof result === "function") {
            cleanup = result;
        }
    };

    onMounted(runEffect);
    onUnmounted(() => cleanup?.());
}