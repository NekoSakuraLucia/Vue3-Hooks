/**
 * A custom hook similar to React's useReducer for Vue 3.
 * @template S - The type of the state.
 * @template A - The type of the action.
 * @param reducer - A reducer function that specifies how the state should be updated.
 * @param initialState - The initial state.
 * @returns A tuple containing the current state and a dispatch function.
 */
export declare function useReducer<S extends object, A>(reducer: (state: S, action: A) => S, initialState: S): readonly [import("vue").Reactive<Partial<S>>, (action: A) => void];
//# sourceMappingURL=useReducer.d.ts.map