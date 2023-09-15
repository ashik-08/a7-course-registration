# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Features

- Unique JSON data

- Tailwind CSS

- useState, useEffect Hooks

- Array Methods (map, find, forEach)

- Conditional Branching (if-else)

- Key, Props

- Destructuring

- Different Course Card

- onClick function

    - Course Name Add
    - Total Credit Calculation
    - Remaining Credit Calculation
    - Total Price Calculation

- Animated Sweet-Alert



## State Management Process of this Project

- Managing state in a React project is a crucial aspect of building dynamic and interactive user interfaces. State refers to data that can change over time and affects how components render and behave. React provides several methods and tools for managing state.

- We can start by identifying which parts of our application need to have state. Not all components will require state management; we should focus on components that need to react to user input, server data, or other dynamic changes.

- In the Courses component i have used UseEffect hook to fetch data from API to component. useEffect accepts two arguments and the second one is optional.

    useEffect( () ⇒ {
        // side effect code goes into this function
    } , [] // specify the dependencies of function )

- Then used the useState hook to handle different course card and via props passed state or state-changing functions down to child component (Course), this is known as prop drilling.

- In the App component i have used four useState to add course to course list, store the information of remaining credit hour, total credit hour and total price. State lets a component remember information like user input. useState returns two value - current state, a function that update states.

    const [count, setCount] = useState(0);

- Then calculate the details inside handleCourseAdd function, used if-else condition and set the updated values inside the state. By using prop drilling method passed down the state-change via child component (Calculation) and shown to the UI after-all.