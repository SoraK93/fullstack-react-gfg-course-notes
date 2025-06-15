# useCallback Hook
Assume your react component has a method, React regenerates the method each time your component renders. And using useCallback hook tell react that render a new one only if something significant changes.

> ![IMPORTANT]  
> useMemo and useCallback hooks are comparable. The main differnce between useCallback and useMemo is that useCallback returns a memoized function, while useMemo returns a memoized value.

### Syntax
```
const cachedFn = useCallback(functionToCache, dependencyArray);
```
React's useCallback hook takes two parameters.
- **functionToCache:** It's a function definition we want to cache in order to prevent automatic re-rendering.
- **dependencyArray:** If any changes are made to the array, the functionToCache() above will run and new result will be rendered.

## Benefits of using the useCalback hook:
- **Efficiency Optimization:** Stops needless re-rendering, result in improved efficiency.
- **Limiting the rendering of child components:** Re-render only happens when any change is detected, its done by creating memoized functions and give them as props to child component.
- **Avoiding memory leaks:** Stops replicating functions, which might result in memory leaks, by returning memoized function.
