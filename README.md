# Vue 3 Hooks Package

A TypeScript package that brings React-style hooks to Vue 3, allowing you to use state and other reactive features with a familiar API. Built using Vue 3's reactivity system and designed to make development with Vue 3 more intuitive.

## Features

- **`useState`**: A hook to manage state in a reactive manner.
- **`useEffect`**: A hook to perform side effects in functional components.
- **`useMemo`**: A hook to memoize values for performance optimization.
- **`useCallback`**: A hook to memoize functions for optimal performance.
- **`useReducer`**: A hook to manage state using a reducer function (like Redux).

## Exmaple Usage

- `useState` Hook
```vue
<script setup lang="ts">
import { useState } from "vue3-hooks";

const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
</script>
```