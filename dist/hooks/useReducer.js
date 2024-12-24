import { reactive } from "vue";
/**
 * A custom hook similar to React's useReducer for Vue 3.
 * @template S - The type of the state.
 * @template A - The type of the action.
 * @param reducer - A reducer function that specifies how the state should be updated.
 * @param initialState - The initial state.
 * @returns A tuple containing the current state and a dispatch function.
 */
export function useReducer(reducer, initialState) {
    const state = reactive(initialState);
    const dispatch = (action) => {
        const newState = reducer({ ...state }, action);
        Object.assign(state, newState);
    };
    return [state, dispatch];
}
