# 🚀 NamasteReact Series - Episode 03 Learnings 🚀

Welcome to the documentation of my learnings from Episode 03 of the NamasteReact series. In this episode, we covered a variety of topics related to JavaScript and React. Here's a summary of what I've learned (ignore typos):

1. Create a script so you don't have to run npm commands again and again.
2. Add script for starting the dev environment and parcel build for pushing the app to production-ready code.
3. `npm start === npm parcel index.html`
4. `npm run start === npm parcel index.html`
5. `npm run build === npx parcel build index.html`
6. `React.createElement()` - what it does? creates an object, and when we render this element onto the DOM, then it becomes an HTML element.
7. Fun part - we can build a React application without JSX; JSX makes a developer's life easy.
8. JSX is a convention where we kind of merge HTML and JS.
9. JSX is not HTML written inside JavaScript.
10. Instead, JSX is an HTML lookalike or XML lookalike syntax.
11. We can create a ReactElement using core React. We can also create a ReactElement using JSX.
12. As a programmer and developer, do we write code for the machine or humans? The answer is vague; we write it for both. Human first and then machine second.
13. Can the JS engine read JSX? No, the JS engine can only understand the code written in JavaScript.
14. Then how does JSX work? Parcel is responsible. The code we write, even before it reaches the JS engine, is transpiled (converted to code that the browser can understand, that React can understand) before it goes to the JS engine. and then the JS engine receives the code the browsers can understand.
15. Who is transpiling the code? Parcel is responsible, not working alone; it gives the responsibility to the package called Babel.
16. Using React
17. `React.createElement => ReactElement - JS Object => HTMLElement(render)`
18. Using JSX
19. `JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)`
20. Read more on Babel and Parcel
21. How Babel works? Babel reads the code token by token, and .. (continue your research)
22. Add a class to the React element created using JSX
23. Attributes are added as camelcase in JSX example background-color should be written as backgroundColor (please verify)
24. Explore various attributes of various tags.
25. Single line and multiple lines in JSX - to write JSX in multiple lines wrap the code in (). example.
    ```jsx
    const heading = (<h1>Hello Developer<h1>)
    ```
26. What are React components? - 2 ways of creating React components: class-based components, functional components.
27. Functional components are nothing but just a JavaScript function that returns some piece of JSX code.
28. As JSX code is nothing but a React element so
29. Functional components are nothing but just a JavaScript function that returns a React element or elements.
30. ```jsx
   // Example 1
   const Function = () => {
       return <h1 class="heading">Hello Developer</h1>
   }
    // Example 2
    const Function = () => {
    return <div><h1 class="heading">Hello Developer</h1></div>
    }
    // Example 3
    const Function = function () {
    return <div><h1 class="heading">Hello Developer</h1></div>
    }

31. Naming convention for functional components starts with a capital letter followed by lowercase. Example - Function1(), Addition(), Header(), and likewise.

32. What is the difference between a React element and a functional component?
33. What is component composition? Basic idea - adding components inside a component. Composing components into one another is nothing but component composition.
34. We can write JavaScript inside JSX. If you add {} inside a functional component, the function component will have the superpower and we can write any piece of JavaScript there.
35. How can we put a React element inside the component? Using {}, {element}
36. How can we put a React element inside an element? Using {}, {element}
37. How can we put React components inside the element? Using <></> or using <></> or <></>
39. Naming convention for functional components starts with Capital letter followed by small case. Example - Function1(), Addition(), Header() and likewise.
40. What is the difference between a React element and a functional component?
41. What is component composition? Basic idea - adding components inside component. Composing components into one another is nothing but component composition.
42. We can write JavaScript inside JSX. If you add {} inside functional component, the function component will have the superpower and we can write any piece of javascript there.
43. How can we put react element inside the component. using {}, {element}
44. How can we put react element inside the element. using {}, {element}
45. How can we put react components inside the element. using angular </><component/> or using <component></component>
here are the ways - {HeadingFunction5()}, <HeadingFunction5></HeadingFunction5>, <HeadingFunction5 />
46. How JSX sanitizes the data? Assume that you had a cross-scripting attack, how JSX handles it? How it prevents cross-scripting attack?
47. What makes the web app React code readable and faster? Code is readable because we are writing JSX. How to prove this? .Write code where createElement using core React.
48. At the end of the day, it is all about JavaScript.

## Additional Information

- [LinkedIn - highnitin](https://linkedin.com/in/highnitin)

Feel free to connect with me on LinkedIn for more discussions and updates on my learning journey!

Happy hacking! 🚀
