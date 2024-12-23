# Vue 3 Hooks Package

A TypeScript package that brings React-style hooks to Vue 3, allowing you to use state and other reactive features with a familiar API. Built using Vue 3's reactivity system and designed to make development with Vue 3 more intuitive.

## Features

- **`useState`**: A hook to manage state in a reactive manner.
- **`useEffect`**: A hook to perform side effects in functional components.
- **`useMemo`**: A hook to memoize values for performance optimization.
- **`useCallback`**: A hook to memoize functions for optimal performance.
- **`useReducer`**: A hook to manage state using a reducer function (like Redux).

## Installation

You can install this package via npm:

```bash
npm install vue3-hooks-react-style
```

## Exmaple Usage

- `useState` Hook
```vue
<script setup lang="ts">
import { useState } from "vue3-hooks-react-style";

const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
</script>
```

- `useEffect` Hook
```vue
<script setup lang="ts">
import { useState, useEffect } from "vue3-hooks-react-style";

const [count, setCount] = useState(5);

useEffect(() => {
  console.log(`Count changed: ${count.value}`);
});
</script>
```

- `useMemo` Hook
```vue
<script setup lang="ts">
import { useState, useMemo } from 'vue3-hooks-react-style';

const [count, setCount] = useState(0);
const [multiplier, setMultiplier] = useState(1);

const multipliedValue = useMemo(() => {
  return count.value * multiplier.value;
}, [count.value, multiplier.value]);

const increment = () => setCount(count.value + 1);
const changeMultiplier = () => setMultiplier(multiplier.value + 1);
</script>
```

- `useCallback` Hook
```vue
<script setup lang="ts">
import { useCallback, useState } from "vue3-hooks-react-style";

const [count, setCount] = useState(0);

const increment = useCallback(() => {
  console.log("Incrementing count...");
  setCount(count.value + 1);
}, [count]);
</script>
```

- `useReducer` Hook
```vue
<script setup lang="ts">
import { useReducer } from "vue3-hooks-react-style";

type CounterState = { count: number };
type CounterAction =
  | { type: "increment"; payload?: number }
  | { type: "decrement"; payload?: number }
  | { type: "reset" };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload ?? 1) };
    case "decrement":
      return { count: state.count - (action.payload ?? 1) };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unknown action type`);
  }
};

const [state, dispatch] = useReducer(counterReducer, { count: 0 });

const increment = () => dispatch({ type: "increment" });
const decrement = () => dispatch({ type: "decrement" });
const reset = () => dispatch({ type: "reset" });
</script>
```

## npm Package Link
For more details and updates, check out our package on [npm](https://www.npmjs.com/package/vue3-hooks-react-style).

## How to Contribute

1. Fork the repository.
2. Create a feature branch from the `new-feature/hooks` branch.
3. Make your changes and ensure tests pass.
4. Submit a pull request with a description of your changes.

Thank you for helping to improve **Vue 3 Hooks Package**!

---

By following these guidelines, we can maintain a high standard of quality and ensure that the package continues to grow in a sustainable way. Thank you for your contributions! 🙏
