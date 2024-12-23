import { ref } from "vue";
/**
 * A custom hook that manages state in a Vue component.
 * This hook provides a reactive state and a setter function to update the state.
 *
 * @param initialState The initial value of the state.
 * @returns An array containing the reactive state and a function to update the state.
 *
 * The returned array is a tuple where:
 * - The first element is the `state`, a reactive reference to the current value.
 * - The second element is `setState`, a function that updates the `state` value.
 */
export function useState(initiaState) {
    const state = ref(initiaState);
    const setState = (newState) => {
        state.value = typeof newState === "function"
            ? newState(state.value)
            : newState;
    };
    return [state, setState];
}