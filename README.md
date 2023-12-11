# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Name
- **Course Registration**

## Live Website
- [Course Registration Website](https://a7-course-registration.surge.sh/)

## Description
The Course Registration website provides a dashboard displaying various course details fetched from an API. Users can select courses to add to their cart, but the total credit hours cannot exceed 20. If a user attempts to add more than 20 credits, an animated alert will inform them that they don't have enough credit. Additionally, users cannot add the same course twice. The website is developed using React and Tailwind CSS, ensuring responsiveness across different devices.

## Technology
- React
- Tailwind CSS

## Key Points
1. Dynamic dashboard displaying course details from an API.
2. Users can add courses to their cart with a maximum limit of 20 credits.
3. Animated alert for credit limit and prevention of adding the same course twice.
4. Developed using React and Tailwind CSS.
5. Responsive design for optimal viewing on various devices.

## Project Features

#### Dashboard
- Displays various course details fetched from an API.

#### Course Selection
- Allows users to select and add courses to their cart.

#### Credit Hour Limit
- Restricts users from taking more than 20 credit hours.

#### Animated Alert
- An animated alert is displayed if a user attempts to exceed the credit hour limit.

#### Course Duplication Prevention
- System prevents users from adding the same course twice.

#### Responsive Design
- Optimized for a seamless experience on various devices.

#### Others

- Unique JSON data

- Tailwind CSS styling

- `useState` and `useEffect` Hooks

- Array Methods (map, find, forEach)

- Conditional Branching (if-else)

- Key, Props

- Destructuring

- Different Course Cards

- `onClick` function
  - Course Name Add
  - Total Credit Calculation
  - Remaining Credit Calculation
  - Total Price Calculation

- Animated Sweet-Alert for credit limit

## State Management Process of this Project

- Managing state in a React project is a crucial aspect of building dynamic and interactive user interfaces. State refers to data that can change over time and affects how components render and behave. React provides several methods and tools for managing state. Managing state in a React project is achieved through the use of hooks such as `useState` and `useEffect`.

- We can start by identifying which parts of our application need to have state. Not all components will require state management; we should focus on components that need to react to user input, server data, or other dynamic changes.

- In the Courses component i have used `useEffect` hook to fetch data from API to component. useEffect accepts two arguments and the second one is optional.

    `useEffect( () ⇒ {
        // side effect code goes into this function
    } , [ // specify the dependencies of function here ] );`

- Then used the useState hook to handle different course card and via props passed state or state-changing functions down to child component (Course), this is known as prop drilling.

- In the App component i have used four `useState` to add course to course list, store the information of remaining credit hour, total credit hour and total price. State lets a component remember information like user input. `useState` returns two value - current state, a function that update states.

    `const [count, setCount] = useState(0);`

- Then calculate the details inside handleCourseAdd function, used if-else condition and set the updated values inside the state. By using prop drilling method passed down the state-change via child component (Calculation) and shown to the UI after-all.
