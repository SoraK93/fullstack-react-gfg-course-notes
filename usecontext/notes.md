# useContent Hook
What it does is make state globally accessible. It is used when the required data needs to be accessed by numerous components simultaneously.  
useContext hook allows functional components to consume context values produced by a Provider component.

> ![NOTES]  
> When you call `useCotnext()` without a provider it simply returns the default value or `undefined` if no default exists.

## Importance of useContext
- **Sharing Data Across Components:** Useful when data needs to be accessed by multiple components and at different levels of the component tree.
- **Avoiding Prop Drilling:** Eliminates the process of passing data from one component to another through props.
- **Creating a context in React:** We use `React.createContext` method which returns a context object that can e used to provide and consume values.

## Benefits of useContext
1. **Simplicity:** Simplifies the consumption of context by reducing boilerplate code and enhancing readability.
2. **Performance:** Avoid unnecessary re-renders caused by imtermediate components.
3. **Improved Developer Experience:** Align with functional programming paradigm, which in turn makes working with context more intuituve.
4. **Code Organization:** Promotes cleaner code organization.

## createContext()
When creating a context using 'createContext', you can provide a default value as an argument to the function. This default value will be used when no matching 'Provider' is found in the component tree.
```
const someVariable = useContext(initialValue);
// initialValue can be anything, a int, a string, a object, ...
```

