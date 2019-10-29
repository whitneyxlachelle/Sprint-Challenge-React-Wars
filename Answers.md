# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library for building UIs. React allows developers to build complex UI with components that change frequently over time. Platforms such as Twitter, Facebook and Apple have data that change frequently, so React finds out what changes have been made, and changes only what needs to be changed. The virtual Dom aids in the solution.

1. What does it mean to think in react?

Thinking in React is the thought process used when building out apps. Developers have to break the UI into a component hierarchy, build a static version in React, identify where "state" should live and add inverse data flow. 

1. Describe state.

State is used so that a component can keep track of information in between any renders that it does.

1. Describe props.

Props are used to pass data from parent to child or by the component itself.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that affects something outside of the scope of the current function being executed. Adding a dependency array at the end of your hook will sync effects in a React Component.