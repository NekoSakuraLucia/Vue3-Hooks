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
export declare function useState<T>(initiaState: T): readonly [[T] extends [import("vue").Ref<any, any>] ? import("@vue/shared").IfAny<T, import("vue").Ref<T, T>, T> : import("vue").Ref<import("vue").UnwrapRef<T>, T | import("vue").UnwrapRef<T>>, (newState: T | ((prev: T) => T)) => void];
//# sourceMappingURL=useState.d.ts.map