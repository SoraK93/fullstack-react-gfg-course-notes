# useReducer Hook
It is a powerful tool for managing state in functional components. It provides a more controlled way to update state especially when dealing with complex state logic.

> useReducer() hook is similar to useState(), since both manages state change.

## Understanding useReducer
useReducer is inspired by the Redux library's reducer pattern.  
```
const [currentState, dispatchFunction] = useReducer(reducerFunction, initialState);
```

### Step - by - Step Process explained
1. Accepts reducerFunction() and initialState as arguments.
2. Returns currentState and dispatchFunction() respectively.
3. reducerFunction() takes currentState and action as argument.
4. Returns the new state based on action type.

## Why useReducer?
There are several reasons why you might choose to use useReducer over useState.
1. **Complex State Logic :** By centralizing stae transitions within a reducer function, you can manage complex state logic and multiple sub-values more efficiently.
2. **Predictable State Updates :** Enforces a strict pattern for updating state. This makes it easier to reason about state changes, especially in larger applications.
3. **Component Composition :** Always to break down complex state into smaller and more manageable pieces.
4. **Optimized Performance :** useReduver relies on shallow comparison to determine state changes, thus optimizing re-render by avoiding unnecessary updates.
5. **Sharing State Logic :** Allows to define the state logic once in reducer() and reuse it across different components.
6. **Middleware or Side Effects :** useReducer can be combined with other hooks.