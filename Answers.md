# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library that allows for quickly building user interfaces. The view of a user interface can change and update dynamically with React. For example, displaying different sets of data with an API call can be rendered out dynamically with React components.

1. What does it mean to think in react?

Thinking in React is the idea that components of an application should be built and maintainted separately so if that if there is ever a reason to render out data or manage state differently that is much easier to reflect these changes within your code.

1. Describe state.

State is an object within each React component that determines how that component will render and behave.

1. Describe props.

Props are similar to function arguments in vanilla JavaScript such that they are arguments passed into React components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that will affect outside of the scope of the function that is executed. A way to sync effects in a React component is by passing a second argument, a dependency, to useEffect() that will determine what is synced to the effect firing/updating.