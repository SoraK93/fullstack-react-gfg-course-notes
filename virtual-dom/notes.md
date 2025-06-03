# Virtual DOM
It is a concept used in various frontend libraries and frameworks, to optimize the performance of web applications by minimizing the number of direct manipulations to the actual DOM. It works by maintaining a lightweight, in-memory representation of the actual DOM.

## React handles creation of DOM via:

### Reconciliation & Diffing Algorithm
Reconciliation plays a crucial role in enhancing the responsivesness and efficiency of React applications, abstracting away the complexities of DOM manipulation and providing developers with a streamlined approach to building dynamic user interfaces. When a componenet's state changes, react re-renders the component and its children, comparing the new virtual DOM with the previous one through a diffing algorithm.  
The diffing algorithm compares new virtual DOM tree with actual DOM, recursively traversing both trees to identify any differences, such as additions, removals or updates of elements.
